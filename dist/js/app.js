import { NegociacaoController } from './controllers/negociacao_controller.js';
import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 20, 100);
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error(`Não foi possivel iniciar a aplicação. Verificar se esse form existe`);
}
console.log(negociacao);
console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.valor);
console.log(negociacao.volume);
