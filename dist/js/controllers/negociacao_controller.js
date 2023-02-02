//importando Negociacao para conseguir pegar os valores
import { Negociacao } from "../models/negociacao.js";
//exportando uma classe NegociacaoController
export class NegociacaoController {
    //criando um contrutor que vai receber as variaveis que forem passadas no HTML
    constructor() {
        //essa variavel vai pegar o documento do seletor do elemento data (id=data criado no HTML)
        this.inputData = document.querySelector('#data');
        //essa variavel vai pegar o documento do seletor do elemento quantidade (id=quantidade criado no HTML)
        this.inputQuantidade = document.querySelector('#quantidade');
        //essa variavel vai pegar o documento do seletor do elemento valor (id=valor criado no HTML)
        this.inputValor = document.querySelector('#valor');
    }
    //criando um metodo chamado adiciona
    adiciona() {
        // // para ver se realmente está pegando o valor correto 
        // console.log(this.inputData);
        // console.log(this.inputQuantidade);
        // console.log(this.inputValor);
        //importar valores da negociação do arquivo Negociacao 
        const negociacao = new Negociacao(
        //    esse imput esta pegando o valor da data do arquivo negociação
        this.inputData.value, 
        //    esse imput esta pegando o valor da quantidade do arquivo negociação
        this.inputQuantidade.value, 
        //    esse imput esta pegando o valor da valor do arquivo negociação
        this.inputValor.value);
        //fazendo um console.log de negociação para ver se realmente está trazendo o valor esperado 
        console.log(negociacao);
    }
}
