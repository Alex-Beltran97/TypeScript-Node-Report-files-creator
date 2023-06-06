"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Writer {
    constructor(path, prefix = 'f') {
        this._path = path;
        this._prefix = prefix;
    }
    ;
    get fullPath() {
        return this._path + this._prefix;
    }
    ;
    create(texts, toDelete = false) {
        for (let i = 0; i < texts.length; i++) {
            const fileName = this.fullPath + (i + 1) + '.txt';
            if (toDelete) {
                this.toDeleteFn(fileName);
            }
            else {
                const stream = (0, fs_1.createWriteStream)(fileName);
                stream.write(texts[i], 'utf-8', (error) => {
                    if (error)
                        return console.log(error);
                    console.log('File was wrote correctly!');
                    stream.end();
                });
            }
            ;
        }
        ;
    }
    ;
    toDeleteFn(fileName) {
        (0, fs_1.unlink)(fileName, (err) => {
            if (err)
                return console.log(err);
            console.log(`${fileName} was deleted successfully!`);
        });
    }
    ;
}
exports.default = Writer;
//# sourceMappingURL=Writer.js.map