"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const PromiseFs_1 = require("./PromiseFs");
process.on('exit', (code) => {
    console.log(`Exit with code: ${code}`);
});
const dist = path.join(process.cwd(), process.argv[2]);
const src = path.join(__dirname, '../temp');
const generator = async () => {
    try {
        console.log(`creating ${process.argv[2]}`);
        await PromiseFs_1.default.createFolder(dist);
        await PromiseFs_1.default.replaceFiles(src, dist);
        console.log('success!');
    }
    catch (e) {
        console.log(`${e.name}: ${e.message}`);
        process.exit(1);
    }
};
generator();
