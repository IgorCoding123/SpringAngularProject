export class Carro {

    id! : number;
    nome! : string
    
    constructor(id?: number, nome?: string) {
        if (id !== undefined) {
            this.id = id;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
    }
    
    
}
