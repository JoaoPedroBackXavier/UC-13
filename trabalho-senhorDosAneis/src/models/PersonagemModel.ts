export class Personagem{

    public id: number;
    public nome: String;
    public tipo: String;
    public raca: String;
    public arma: String;
    public status: String;

	constructor(id: number, nome: String, tipo: String, raca: String, arma: String, status: String) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.arma = arma;
        this.status = status;
	}   

}