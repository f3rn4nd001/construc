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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const database_2 = __importDefault(require("../database"));
class EviFotosController {
    Fotos(req, res) {
        database_1.default.query('DESCRIBE evidencia');
        res.send("hola");
    }
    agFotos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_2.default.query('INSERT INTO evidencia set ?', [req.body]);
            console.log(req.body);
        });
    }
    eliminarFotos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idFotos = req.param;
            yield database_2.default.query('DELETE FROM evidencia WHERE idFotos = ?', [idFotos]);
        });
    }
    modificarFotos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idFotos = req.param;
            yield database_2.default.query('UPDATE evidencia set ? WHERE idFotos = ?', [req.body, idFotos]);
        });
    }
}
const eviFotosController = new EviFotosController();
exports.default = eviFotosController;
