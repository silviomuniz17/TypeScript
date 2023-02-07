//aqui eu criei uma tipo de variavel generica que aceita quaquer coisa T
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
    template(model) {
        throw Error('Classe filha precisa implementar o metodo templaes');
    }
}
