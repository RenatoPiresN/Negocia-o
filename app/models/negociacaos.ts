import { Negociacao } from "./negociacao.js";

export class Negociacoes { //mesma coisa que Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
             //mesma coisa que ReadonlyArray
    public lista(): readonly Negociacao [] {
        return this.negociacoes;
    }
}