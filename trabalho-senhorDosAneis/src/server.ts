import express, { Application } from "express";
import { Request, Response, NextFunction } from "express";
import personagemRoutes from "./routes/PersonagemRoutes";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.use(personagemRoutes);

app.use((req: Request, res: Response) => {
    console.log(`Rota não encontrada: ${req.originalUrl}`);
    res.status(404).json({ "erro": "A passagem de Caradhras está fechada por Saruman. Esta rota não existe para nós. Só nos sobrou...Moria." });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
})