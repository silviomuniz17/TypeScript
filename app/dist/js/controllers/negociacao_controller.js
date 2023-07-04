var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Negociacoes_Views } from "../views/negociacoes_views.js";
import { Mensagem_View } from "../views/mensagem_view.js";
import { Dias_Da_Semana } from "../enums/dias_da_semana.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoes_Views = new Negociacoes_Views('#negociacoesViews');
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
__decorate([
    logarTempoDeExecucao(true),
    inspect(),
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
