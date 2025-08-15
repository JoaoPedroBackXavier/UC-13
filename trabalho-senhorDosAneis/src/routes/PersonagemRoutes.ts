import { Router } from "express";
import { PersonagemController } from "../controllers/PersonagemController";

const router = Router();

const controller = new PersonagemController();

router.get('/personagens', controller.listPersonagens);
router.get('/personagens/:id', controller.searchPersonagem);
router.post('/personagens', controller.createPersonagem); // Frodo sente o Um Anel querendo retornar ao seu Mestre...
router.put('/personagens/:id', controller.updatePersonagem); // Frodo sente o Um Anel querendo retornar ao seu Mestre...
router.delete('/personagens/:id', controller.deletePersonagem); // Frodo sente o Um Anel querendo retornar ao seu Mestre...

export default router;