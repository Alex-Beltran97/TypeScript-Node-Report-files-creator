"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Request {
    constructor(limit, url) {
        this._limit = limit;
        this._url = url;
    }
    ;
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this._limit; i++) {
                const data = yield fetch(this._url + (i + 1));
                const todo = yield data.json();
                results.push(JSON.stringify(todo));
            }
            ;
            return results;
        });
    }
    ;
}
exports.default = Request;
;
//# sourceMappingURL=Request.js.map