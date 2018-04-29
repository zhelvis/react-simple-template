#!/usr/bin/env node

"use strict";


const fs = require('fs');
const path = require('path');


let dist = path.join(process.cwd(), process.argv[2]);
let src = path.join(__dirname, 'temp' );

/**
 * Copypaste all files from src dir to dist
 * @param src -- location of template
 * @param dist -- dir to load
 */

function generateTemp(src, dist) {
    fs.readdir(src, function(err, files){

        if (err) throw err;

        files.forEach(function(item){

            var file = path.join(src, item);

            fs.stat(file, function() {
                return function(err, stats) {
                    if (err) throw err;

                    if ( stats.isFile() ){
                        fs.readFile(file, function(err, data){
                            if (err) throw err;
                            fs.writeFile(path.join(dist, item), data, function(err){
                                if (err) throw err;
                                console.log(`generate ${path.join(dist, item)}`);
                            });
                        });
                    }
                    if ( stats.isDirectory() ){
                        fs.mkdir(path.join(dist, item),function(err){
                            if (err) throw err;
                            generateTemp(file, path.join(dist, item));
                        });
                    }
                }
            }(file));

        });
    });
};

/**
 * Create dir and start loading
 */

fs.mkdir(dist,function(err){
    if (err) throw err;
    generateTemp(src, dist);
});