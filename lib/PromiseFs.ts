import * as fs from 'fs';
import * as path from 'path';

/**
 * Manipulating files using native promise api in Node < v.10
 *
 * @export
 * @class FS
 */
export default class FS {

    /**
     * Get a list of files and folders in the current folder
     * return string[] on resolve and error on reject
     *
     * @static
     * @param {string} folderName
     * @returns {Promise <any>}
     * @memberof FS
     */
    static readFolder(folderName: string): Promise <any>
    {
        return new Promise((resolve,reject) => {
            fs.readdir(folderName, (err: Error, files: string[]) => {
                if (err) reject(err);
                resolve(files); 
            });
        });
    };

    /**
     * Read file
     * return buffer on resolve and error on reject
     * 
     * @static
     * @param {string} fileName
     * @returns {Promise <any>}
     * @memberof FS
     */
    static readFile(fileName: string): Promise <any>
    {
        return new Promise((resolve,reject) => {
            fs.readFile(fileName, (err: Error, data: Buffer) => {
                if (err) reject(err);
                resolve(data);
            });
        });      
    };

    /**
     * Create/Rewrite file
     * return void on resolve and error on reject
     *
     * @static
     * @param {string} fileName
     * @param {Buffer} buffer
     * @returns {Promise <any>}
     * @memberof FS
     */
    static writeFile(fileName: string, buffer: Buffer): Promise <any>
    {
        return new Promise((resolve,reject) => {
            fs.writeFile(fileName, buffer, (err: Error) => {
                if (err) reject(err);
                resolve();
            });
        });      
    };

    /**
     * Get file status
     * return fs.stats on resolve and error on reject
     *
     * @static
     * @param {string} fileName
     * @returns {Promise <any>}
     * @memberof FS
     */
    static getFileStatus(fileName: string): Promise <any>
    {
        return new Promise((resolve,reject) => {
            fs.stat(fileName, (err: Error, stats: object) => {
                if (err) reject(err);
                resolve(stats);
            });
        }); 
    };

    /**
     * Create new folder
     * return void on resolve and error on reject
     *
     * @static
     * @param {string} dist
     * @returns {Promise<any>}
     * @memberof FS
     */
    static createFolder(dist: string): Promise<any>
    {
        return new Promise((resolve, reject) => {
            fs.mkdir(dist, (err: Error) => {
                if (err) reject(err);
                resolve(); 
            });
        });
    };

    /**
     * 
     * Recursively replase files from one to another folder
     * return void on resolve and error on reject
     * 
     * @static
     * @param {string} src
     * @param {string} dist
     * @returns {Promise<void>}
     * @memberof FS
     */
    static async replaceFiles(src: string, dist: string): Promise<void>
    {
        let files = await FS.readFolder(src);
        await files.forEach(async (item: string) => {
            let file = path.join(src, item);
            let stats = await FS.getFileStatus(file);

            if (stats.isFile()) {
                let buffer = await FS.readFile(file);
                await FS.writeFile(path.join(dist, item), buffer);
            };

            if (stats.isDirectory()) {
                if( item !== process.argv[2]){
                    await FS.createFolder(path.join(dist, item));
                    await FS.replaceFiles(file,path.join(dist, item));
                };
            };
        });
    };
};
