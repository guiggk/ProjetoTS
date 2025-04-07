import { Negociacao } from "./models/negociacao.js";
import { NegociacaoController} from "./controllers/negociacaoController.js";


const negociacao = new Negociacao(new Date(),10,100);
console.log(negociacao.volume);

const controller = new NegociacaoController();
const form = document.querySelector("form");
if(form){
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        controller.adiciona();
    })
}else{
    throw Error("Não foi possivel inicializar a aplicação. Verifique se o form existe");
}


