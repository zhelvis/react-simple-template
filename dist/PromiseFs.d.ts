/// <reference types="node" />
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
    static readFolder(folderName: string): Promise<any>;
    /**
     * Read file
     * return buffer on resolve and error on reject
     *
     * @static
     * @param {string} fileName
     * @returns {Promise <any>}
     * @memberof FS
     */
    static readFile(fileName: string): Promise<any>;
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
    static writeFile(fileName: string, buffer: Buffer): Promise<any>;
    /**
     * Get file status
     * return fs.stats on resolve and error on reject
     *
     * @static
     * @param {string} fileName
     * @returns {Promise <any>}
     * @memberof FS
     */
    static getFileStatus(fileName: string): Promise<any>;
    /**
     * Create new folder
     * return void on resolve and error on reject
     *
     * @static
     * @param {string} dist
     * @returns {Promise<any>}
     * @memberof FS
     */
    static createFolder(dist: string): Promise<any>;
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
    static replaceFiles(src: string, dist: string): Promise<void>;
}
