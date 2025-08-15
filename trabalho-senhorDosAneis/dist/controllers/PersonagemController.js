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
exports.PersonagemController = void 0;
const database_1 = require("../config/database");
class PersonagemController {
    listPersonagens(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.connection.query('SELECT * FROM personagens');
            return res.status(200).json(rows);
        });
    }
    searchPersonagem(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const [rows] = yield database_1.connection.query('SELECT * FROM personagens WHERE id = ?', [id]);
            if (rows.length === 0) {
                return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
            }
            return res.status(200).json(rows[0]);
        });
    }
    createPersonagem(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, tipo, raca, arma, status } = req.body;
            yield database_1.connection.query("INSERT INTO produtos (nome, tipo, raca, arma, status) VALUES (?, ?, ?, ?, ?)", [nome, tipo, raca, arma, status]);
            return res.status(200).json({ mensagem: 'personagem inserido com sucesso' });
        });
    }
    updatePersonagem(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, tipo, raca, arma, status } = req.body;
            yield database_1.connection.query("UPDATE produtos SET nome = ?, tipo = ?, raca = ?, arma = ?, status = ? WHERE id = ?");
            return res.status(200).json({ mensagem: 'personagem atualizado com sucesso' });
        });
    }
    deletePersonagem(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
            return res.status(200).json({ mensagem: 'personagem deletado com sucesso' });
        });
    }
}
exports.PersonagemController = PersonagemController;
