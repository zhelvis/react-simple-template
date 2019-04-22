#!/usr/bin/env node


/* коммент */
import * as path from 'path';
import PromiseFs from './PromiseFs';

process.on('exit',(code: number) => {
    console.log(`Exit with code: ${code}`);
});

const dist = path.join(process.cwd(), process.argv[2]);
const src = path.join(__dirname, '../temp' );

const generator = async () => {
    try{
        console.log(`creating ${process.argv[2]}`)
        await PromiseFs.createFolder(dist);
        await PromiseFs.replaceFiles(src, dist);
        console.log('success!');
    }catch(e){
        console.log(`${e.name}: ${e.message}`);
        process.exit(1);
    }
}

generator();