#!/usr/bin/env node

"use strict";


const fs = require('fs');
const path = require('path');

process.on('exit', function(code){
    console.log(`Exit with code: ${code}`);
});


const dist = path.join(process.cwd(), process.argv[2]);
const src = path.join(__dirname, 'temp' );



function startFileFlow(src, dist) {
    let files = fs.readdirSync(src);
    files.forEach( item => {
        let file = path.join(src, item);
        let stats = fs.statSync(file);
        if (stats.isFile()) {
            let buffer = fs.readFileSync(file);
            console.log(`Generate file ${path.join(dist, item)}`);
            fs.writeFileSync(path.join(dist, item), buffer);
        }
        if (stats.isDirectory()) {
            if( item !== process.argv[2]){
                console.log(`Generate folder ${path.join(dist, item)}`);
                fs.mkdirSync(path.join(dist, item));
                startFileFlow(file,path.join(dist, item))
            };
        };
    });
}

function createFolder(dist, name_of_dist){
    return new Promise((resolve, reject) => {
        fs.mkdir(dist, err => {
            if (!err){
                console.log( `Create ${name_of_dist}...` );
                resolve();
            }else{
                console.log( `${name_of_dist} is already exist. Try other name of the folder or delete it` );
                reject(err);
            };
        });
    });
}


createFolder(dist, process.argv[2])
    .then(() => {
        startFileFlow(src,dist);
    })
    .catch( err => {
        process.exit(1);
    })