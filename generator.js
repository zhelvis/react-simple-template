#!/usr/bin/env node --harmony

const fs = require('fs');
const path = require('path');


var dist = `${process.cwd()}/${process.argv[2]}`;
var src = `${path.dirname(process.argv[1])}/temp`;

/**
 * Copypaste all files from src dir to dist
 * @param src -- location of template
 * @param dist -- dir to load
 */

function generateTemp(src, dist) {
    fs.readdir(src, function(err, files){

        if (err) throw err;

        files.forEach(function(item){

            var file = `${src}/${item}`;

            fs.stat(file, function() {
                return function(err, stats) {
                    if (err) throw err;

                    if ( stats.isFile() ){
                        fs.readFile(file, function(err, data){
                            if (err) throw err;
                            fs.writeFile(`${dist}/${item}`, data, function(err){
                                if (err) throw err;
                                console.log(`generate ${dist}/${item}`);
                            });
                        });
                    }
                    if ( stats.isDirectory() ){
                        fs.mkdir(`${dist}/${item}`,function(err){
                            if (err) throw err;
                            generateTemp(file, `${dist}/${item}`);
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