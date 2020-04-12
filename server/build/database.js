"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keis_1 = __importDefault(require("./keis"));
const pool = promise_mysql_1.default.createPool(keis_1.default.database);
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log("base de datos conectada");
});
exports.default = pool;
