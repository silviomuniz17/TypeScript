//aqui eu criei uma tipo de variavel generica que aceita quaquer coisa T
// abstract class é uma classe que não pode ser criada uma estancia dela apenas o filho erdando uma estancia dela para puxar
// ex: negociacoes_view.ts ou mensagem_view.ts
export class Views {
    //criando um contrutor para que possa pegar o id 'negociacoes_views' no indexs.HTML
    constructor(seletor) {
        // ele vai lá no Dom pegar a propriedade e jogar o valor no elemento/variavel elemento
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
