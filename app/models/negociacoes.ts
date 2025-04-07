import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes:Negociacao[]= [];

    adicionarnegociacao(negocio:Negociacao):void{
        this.negociacoes.push(negocio);
    }

    lista():readonly Negociacao[]{
        return this.negociacoes;
    }
}
