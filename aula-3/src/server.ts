import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

// Middleware para permitir que o Express interprete JSON
app.use(express.json());

app.get('/saudacao', (req:Request, res:Response):Response => {
    return res.send("Olá, jovem programador");
})







// Iniciando o servidor
app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});