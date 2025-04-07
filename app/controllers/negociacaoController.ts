import { DiasDasSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/neogociacoesViews.js";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView",true);
    private mensagemView = new MensagemView("#mensagemView");
    
    

    constructor(){
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);

    }

    adiciona():void{
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this.negociacoes.adicionarnegociacao(negociacao);
        this.limparFomrulario();
        this.atualizaView();
    }
    
    
    private ehDiaUtil(date:Date){
        return date.getDay() > DiasDasSemana.Domingo && date.getDay() < DiasDasSemana.Sabado;
    }
  
    private limparFomrulario():void{
        this.inputData.value="";
        this.inputQuantidade.value="";
        this.inputValor.value="";
        this.inputData.focus();
    }

    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionado com sucesso");
    }
}