"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PersonagemController_1 = require("../controllers/PersonagemController");
const router = (0, express_1.Router)();
const controller = new PersonagemController_1.PersonagemController();
router.get('/personagens', controller.listPersonagens);
router.get('/personagens/:id', controller.searchPersonagem);
router.post('/personagens', controller.createPersonagem); // Frodo sente o Um Anel querendo retornar ao seu Mestre...
router.put('/personagens/:id', controller.updatePersonagem); // Frodo sente o Um Anel querendo retornar ao seu Mestre...
router.delete('/personagens/:id', controller.deletePersonagem); // Frodo sente o Um Anel querendo retornar ao seu Mestre...
exports.default = router;
