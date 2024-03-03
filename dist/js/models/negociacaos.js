export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //mesma coisa que ReadonlyArray
    lista() {
        return this.negociacoes;
    }
}
