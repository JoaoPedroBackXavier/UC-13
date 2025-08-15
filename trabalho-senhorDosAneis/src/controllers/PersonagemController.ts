import { Request, Response } from "express"
import { connection } from '../config/database';

export class PersonagemController{



    async listPersonagens(req: Request, res: Response): Promise<Response> {
        const [rows]: any = await connection.query('SELECT * FROM personagens');
        const nome = rows[0].nome;

        rows.forEach((personagem: any) => {
            const tipo = personagem.tipo
            if (tipo == "Sociedade"){
                console.log("Corram seus tolos!")
            }else if (tipo == "Nazgûl"){
                console.log("Os Nazgûl não estão em Moria.")
            }else if(tipo == "Balrog"){
                console.log("Você não vai passar!")
            }else{
                console.log("tipo não listado")
            }        
        });

        return res.status(200).json(rows);
    }

    async searchPersonagem(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const [rows]: any = await connection.query('SELECT * FROM personagens WHERE id = ?', [id]);

        const tipo = rows[0].tipo
        if (tipo == "Sociedade"){
            console.log("Corram seus tolos!")
        }else if (tipo == "Nazgûl"){
            console.log("Os Nazgûl não estão em Moria.")
        }else if(tipo == "Balrog"){
            console.log("Você não vai passar!")
        }else{
            console.log("tipo não listado")
        }

        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
        }
        return res.status(200).json(rows[0]);
    }

    async createPersonagem(req: Request, res: Response): Promise<Response> {
        const { nome, tipo, raca, arma, status } = req.body;
        if(tipo == "Nazgûl"){
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
        }
        await connection.query("INSERT INTO personagens (nome, tipo, raca, arma, status) VALUES (?, ?, ?, ?, ?)", [nome, tipo, raca, arma, status])
        return res.status(200).json({mensagem: 'personagem inserido com sucesso'})
    }

    async updatePersonagem(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const [rows]: any = await connection.query('SELECT * FROM personagens WHERE id = ?', [id]);
        const tipoo = rows[0].raca
        if(tipoo == "Nazgûl"){
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
        }
        const { nome, tipo, raca, arma, status } = req.body;
        await connection.query("UPDATE personagens SET nome = ?, tipo = ?, raca = ?, arma = ?, status = ? WHERE id = ?", [nome, tipo, raca, arma, status, id])
        return res.status(200).json({mensagem: 'personagem atualizado com sucesso'})
    }

    async deletePersonagem(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const [rows]: any = await connection.query('SELECT * FROM personagens WHERE id = ?', [id]);
        const tipoo = rows[0].raca
        if(tipoo == "Nazgûl"){
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
        }
        await connection.query("DELETE FROM personagens WHERE id = ?", [id])
        return res.status(200).json({mensagem: 'personagem deletado com sucesso'})
    }

}