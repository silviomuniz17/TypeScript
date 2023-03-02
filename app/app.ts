//importando a classe NegociacaoController.js para que possa utilizalo aqui 
import { NegociacaoController } from './controllers/negociacao_controller.js';

//importando a classe nogociação.js para que possa utilizalo aqui 
import { Negociacao } from './models/negociacao.js';



//puxando as variaveis de negociacao e atribuindo valores a ela
const negociacao = new Negociacao(new Date(), 20, 100);

//-------------------
//junto
//quando a aplicação inicia ele vai criar uma estancia de NegociaçãoController
const controller = new NegociacaoController();
//pegamos o Form do index.html 
const form = document.querySelector('.form');

//esse if é para tratar se o valor é nullo ou não, já que coloquei nas configurações que é obrigado a ser tratado
if (form){
    form.addEventListener('submit',event =>{
        //evento que não deixa fazer o refresh na pagina (como se alto completasse e parace o evendo que iniciou)
        event.preventDefault();
        // console que chamo o add no NegociacaoController
        controller.adiciona();
        // console chamando a parte da visão das negociacoes
    });
}else {
    throw Error(`Não foi possivel iniciar a aplicação. Verificar se esse form existe`)
}

//todas as vezer que subimeter o form (iniciar)  ele vai chamar o elemento adiciona

//------------------ 

// ver os valores no log
console.log(negociacao);

// agora com os get criados consigo trazer os valores como se fosse uma classe ou metodo
console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.valor);
console.log(negociacao.volume);