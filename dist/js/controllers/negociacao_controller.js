import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Negociacoes_Views } from "../views/negociacoes_views.js";
import { Mensagem_View } from "../views/mensagem_view.js";
import { Dias_Da_Semana } from "../enums/dias_da_semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoes_Views = new Negociacoes_Views('#negociacoesViews', true);
        this.mensagem_View = new Mensagem_View('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoes_Views.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        negociacao.data.setDate(12);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagem_View.update('Apenas negociações em dias uteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.listar());
        this.atualizaView();
        console.log(negociacao);
        const limparFormulario = this.limparFormulario();
    }
    ehDiaUtil(data) {
        return data.getDay() > Dias_Da_Semana.DOMINGO
            && data.getDay() < Dias_Da_Semana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoes_Views.update(this.negociacoes);
        this.mensagem_View.update('Negociação adicionada com sucesso');
    }
}
