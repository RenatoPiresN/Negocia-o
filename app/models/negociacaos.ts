import { Negociacao } from "./negociacao.js";

export class Negociacoes { //mesma coisa que Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
             //mesma coisa que ReadonlyArray
    lista(): readonly Negociacao [] {
        return this.negociacoes;
    }
}