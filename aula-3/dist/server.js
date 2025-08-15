"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para permitir que o Express interprete JSON
app.use(express_1.default.json());
app.get('/saudacao', (req, res) => {
    return res.send("Olá, jovem programador");
});
// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
