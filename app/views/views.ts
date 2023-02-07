//aqui eu criei uma tipo de variavel generica que aceita quaquer coisa T
export class Views<T> {

    //criando um elemento/variavel que vai receber o valor do HTLM do tipo privado e inicia vazio
    // protected é um tipo privado porem apenas class filhas consegue ter acesso
    protected elemento: HTMLInputElement;

//criando um contrutor para que possa pegar o id 'negociacoes_views' no indexs.HTML
    constructor(seletor: string) {
        // ele vai lá no Dom pegar a propriedade e jogar o valor no elemento/variavel elemento
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    template(model: T): string{
        throw Error ('Classe filha precisa implementar o metodo templaes')
    }

}

