//importando Negociacao para conseguir pegar os valores
import { Negociacao } from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";

//exportando uma classe NegociacaoController
export class NegociacaoController {
    
    //criando 3 variaveis privadas que não podem ser alteradas
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    //criando uma estancia negociacoes privada que se inicia

    private negociacoes: Negociacoes = new Negociacoes();

    //criando um contrutor que vai receber as variaveis que forem passadas no HTML
    constructor(){
        //essa variavel vai pegar o documento do seletor do elemento data (id=data criado no HTML)
        this.inputData = document.querySelector('#data');
         //essa variavel vai pegar o documento do seletor do elemento quantidade (id=quantidade criado no HTML)
        this.inputQuantidade = document.querySelector('#quantidade');
         //essa variavel vai pegar o documento do seletor do elemento valor (id=valor criado no HTML)
        this.inputValor = document.querySelector('#valor');
    }
    

    //criando um metodo chamado adiciona
    // tipando o retorno para void
    adiciona(): void{
        //foi criado o metodo que cria uma negociação e estou chamando ela
        const negociacao = this.criaNegociacao();
        //fazendo um teste(estou jogando o valor de 12 em uma data para ver se está alterando)(Não esta deixando pois esta imprimindo uma copia da data, criada no get data() no negciacao.ts )
        negociacao.data.setDate(12);
        // depois de criar a negociação á cima ele vai chamar o metodo para adicionar a lista de negociações
        this.negociacoes.adiciona(negociacao);
        // depois de add vou verificar se realmete foi salvo e vou listar a lista
        console.log(this.negociacoes.listar());
        //fazendo um console.log de negociação para ver se realmente está trazendo o valor esperado 
        console.log(negociacao);
        //chamando esse metodo para depois que cria negociação limpa o formulario
        const limparFormulario = this.limparFormulario();

    }

    //metodo que cria uma negociação e retorna o resulta, ficando mais organizado
    // o metodo criado está retornando uma variavel tipada negociação
    criaNegociacao(): Negociacao{
        // criando uma expreção regular que pega todas ' - '
        const exp = /-/g;
        // (convertendo para tipo Date)criando uma contante que pega o valor a minha variavel inputDate e troca o - por , (isso pois a varialvel HTLM vem ano - mes - dia e precisa ser ano , mes , dias)
        const date = new Date(this.inputData.value.replace(exp, ','))
        //convertende o valor de inputQuantidade para interio
        const  quantidade = parseInt(this.inputQuantidade.value);
        // convertendo o parseValue para float já que valor pode ter descimais
        const valor = parseFloat(this.inputValor.value);

        //importar valores da variavel já convertidos para o formato correto para Negociacao
        //precisa ser na ordem correta
        return new Negociacao(date, quantidade, valor);
    }

    //criando metodo para limpar o formaulario e voltar do inicio. Tipo Void pois não retorna nada
    limparFormulario(): void{
        // fazendo o valor inputData receber nada
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // para ir em um lugar apos limpar os valores
        this.inputData.focus();
    }

}