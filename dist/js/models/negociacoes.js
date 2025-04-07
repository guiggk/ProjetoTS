export class Negociacoes {
    negociacoes = [];
    adicionarnegociacao(negocio) {
        this.negociacoes.push(negocio);
    }
    lista() {
        return this.negociacoes;
    }
}
