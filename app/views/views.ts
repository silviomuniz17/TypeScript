//aqui eu criei uma tipo de variavel generica que aceita quaquer coisa T
// abstract class é uma classe que não pode ser criada uma estancia dela apenas o filho erdando uma estancia dela para puxar
// ex: negociacoes_view.ts ou mensagem_view.ts
export abstract class Views<T> {

    //criando um elemento/variavel que vai receber o valor do HTLM do tipo privado e inicia vazio
    // protected é um tipo privado porem apenas class pai e filhas consegue ter acesso
    protected elemento: HTMLInputElement;

//criando um contrutor para que possa pegar o id 'negociacoes_views' no indexs.HTML
    constructor(seletor: string) {
        // ele vai lá no Dom pegar a propriedade e jogar o valor no elemento/variavel elemento
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    //quando ela é abstract força a filha no caso mensagem_view.ts a colocar um metodo lá assim o codigo fica menos sujeito á erros
    // protected quer dizer que apenas o pai e filho vai ter acesos assim no principal tbm não vai aparecer apenas o updat
    protected abstract template(model: T): string

}

