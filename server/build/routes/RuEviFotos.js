"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eFotosController_1 = __importDefault(require("../controllers/eFotosController"));
class RfotosE {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', eFotosController_1.default.Fotos);
    }
}
const rfotosE = new RfotosE();
exports.default = rfotosE.router;
