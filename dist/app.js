"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Request_1 = __importDefault(require("./models/Request"));
const Writer_1 = __importDefault(require("./models/Writer"));
const RequestWriter_1 = __importDefault(require("./models/RequestWriter"));
const request = new Request_1.default(5, 'https://jsonplaceholder.typicode.com/todos/');
const writer = new Writer_1.default((0, path_1.join)(__dirname, '../files/'));
const requestWriter = new RequestWriter_1.default(request, writer);
// requestWriter.create();
// requestWriter.delete();
//# sourceMappingURL=app.js.map