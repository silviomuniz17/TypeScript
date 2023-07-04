//importando Negociacao para conseguir pegar os valores
import {Negociacao} from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";
import {Negociacoes_Views} from "../views/negociacoes_views.js";
import {Mensagem_View} from "../views/mensagem_view.js";
import {Dias_Da_Semana} from "../enums/dias_da_semana.js";
import {logarTempoDeExecucao} from "../decorators/logar-tempo-de-execucao.js";
import {inspect} from "../decorators/inspect.js";

//exportando uma classe NegociacaoController
export class NegociacaoController {

    //criando 3 variaveis privadas que não podem ser alteradas do tipo HTML e Null
    // @DonInject('#data')
    private inputData: HTMLInputElement;
    // @DonInject('#quantidade')
    private inputQuantidade: HTMLInputElement;
    // @DonInject('#valor')
    private inputValor: HTMLInputElement;
    //criando uma estancia negociacoes privada que se inicia
    private negociacoes: Negociacoes = new Negociacoes();
    // estou criando um seletor para que possa pegar uma variavel no HTML
    private negociacoes_Views = new Negociacoes_Views('#negociacoesViews');
    //chamando a mensagem_view para que possa imprimir uma msg (# é no nome do ID que está no HTML)
    private mensagem_View = new Mensagem_View('#mensagemView');


    //criando um contrutor que vai receber as variaveis que forem passadas no HTML
    constructor() {
        //essa variavel vai pegar o documento do seletor do elemento data (id=data criado no HTML)
        // (as HTMLInputElement) estou garantido e falando para meu compilador que está retornando uma HTML assim não vai dar erro (está dando erro pois estou tendo que tratar tudo que for nulo oir conta do TSCONFIG>JSON)
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        //essa variavel vai pegar o documento do seletor do elemento quantidade (id=quantidade criado no HTML)
        // (as HTMLInputElement) estou garantido e falando para meu compilador que está retornando uma HTML assim não vai dar erro (está dando erro pois estou tendo que tratar tudo que for nulo oir conta do TSCONFIG>JSON)
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        //essa variavel vai pegar o documento do seletor do elemento valor (id=valor criado no HTML)
        // (as HTMLInputElement) estou garantido e falando para meu compilador que está retornando uma HTML assim não vai dar erro (está dando erro pois estou tendo que tratar tudo que for nulo oir conta do TSCONFIG>JSON)
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        //ele vai puxar a tabela assim que ela for inicializada mesmo que esteja vazia
        //e junto já está passando os valores da negociacoes
        this.negociacoes_Views.update(this.negociacoes);

    }
    // @logarTempoDeExecucao() é uma função para saber o tempo que demora para executar esse update
    @logarTempoDeExecucao(true)
    // @inspect() é uma função para saber o nome, parametro e retorno
    @inspect()
    // @logarTempoDeExecucao() é uma função para saber o tempo que demora para executar esse adiciona
    @logarTempoDeExecucao()
    //criando um metodo chamado adiciona
    // tipando o retorno para void
    public adiciona(): void {

        //chamar um metodo estatico que esteja dentro de negociacao.ts
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        //fazendo um teste(estou jogando o valor de 12 em uma data para ver se está alterando)(Não esta deixando pois esta imprimindo uma copia da data, criada no get data() no negciacao.ts )
        negociacao.data.setDate(12);

//======================================================================================================================
        // //Essa é uma forma para verificar se é sabado ou domingo
        // //criando um if par receber apenas dias uteis lembrando que 0 é domingo e 6 sabado
        // //getday dias da semana getdate dia do mes 1 a 30
        // if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6){
        //     // depois de criar a negociação á cima ele vai chamar o metodo para adicionar a lista de negociações
        //     this.negociacoes.adiciona(negociacao);
        //     // depois de add vou verificar se realmete foi salvo e vou listar a lista
        //     console.log(this.negociacoes.listar());
        //     //chamando o metodo que atualiza a View (parte da visão do sistema)
        //     this.atualizaView();
        //     //fazendo um console.log de negociação para ver se realmente está trazendo o valor esperado
        //     console.log(negociacao);
        //     //chamando esse metodo para depois que cria negociação limpa o formulario
        //     const limparFormulario = this.limparFormulario();
        // }
        // else {
        //     this.mensagem_View.update('Apenas negociações em dias uteis são aceitas')
        // }
//======================================================================================================================

        // testando se não é dia util utilizando ! no começo
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagem_View.update('Apenas negociações em dias uteis são aceitas');
            return;
        }
            // depois de criar a negociação á cima ele vai chamar o metodo para adicionar a lista de negociações
            this.negociacoes.adiciona(negociacao);
            // depois de add vou verificar se realmete foi salvo e vou listar a lista
            console.log(this.negociacoes.listar());
            //chamando o metodo que atualiza a View (parte da visão do sistema)
            this.atualizaView();
            //fazendo um console.log de negociação para ver se realmente está trazendo o valor esperado
            console.log(negociacao);
            //chamando esse metodo para depois que cria negociação limpa o formulario
            const limparFormulario = this.limparFormulario();
    }

    //criando um metodo para saber se é dia util
    //o dia da semana puxa na pasta enums podendo usar em qualquer lugar 
    private ehDiaUtil(data: Date) {
        return data.getDay() > Dias_Da_Semana.DOMINGO
            && data.getDay() < Dias_Da_Semana.SABADO;
    }


    //metodo que cria uma negociação e retorna o resulta, ficando mais organizado
    // o metodo criado está retornando uma variavel tipada negociação
    // private criaNegociacao(): Negociacao {
    //     // criando uma expreção regular que pega todas ' - '
    //     const exp = /-/g;
    //     // (convertendo para tipo Date)criando uma contante que pega o valor a minha variavel inputDate e troca o - por , (isso pois a varialvel HTLM vem ano - mes - dia e precisa ser ano , mes , dias)
    //     const date = new Date(this.inputData.value.replace(exp, ','))
    //     //convertende o valor de inputQuantidade para interio
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     // convertendo o parseValue para float já que valor pode ter descimais
    //     const valor = parseFloat(this.inputValor.value);
    //     //importar valores da variavel já convertidos para o formato correto para Negociacao
    //     //precisa ser na ordem correta
    //     return new Negociacao(date, quantidade, valor);
    // }

    //criando metodo para limpar o formaulario e voltar do inicio. Tipo Void pois não retorna nada
    private limparFormulario(): void {
        // fazendo o valor inputData receber nada
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // para ir em um lugar apos limpar os valores
        this.inputData.focus();
    }

    //criando um metodo que atualiza a parte de visão (veiw) para que não esqueça de fazer mais para frente
    private atualizaView(): void {
        //sempre que add uma nova negociação vai fazer
        this.negociacoes_Views.update(this.negociacoes);
        //depois de fazer um update das informações vai chamar a class mensagem
        this.mensagem_View.update('Negociação adicionada com sucesso');

    }


}