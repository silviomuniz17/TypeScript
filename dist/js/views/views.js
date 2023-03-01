//aqui eu criei uma tipo de variavel generica que aceita quaquer coisa T
// abstract class é uma classe que não pode ser criada uma estancia dela apenas o filho erdando uma estancia dela para puxar
// ex: negociacoes_view.ts ou mensagem_view.ts
export class Views {
    //criando um contrutor para que possa pegar o id 'negociacoes_views' no indexs.HTML
    //chamando a  variavel de segurança para que não possa ser alterada o HTML (quando coloco esse ? quer dizer que é opcional usar ou não )
    constructor(seletor, escapar) {
        //criando uma variavel de segurança para que não possa ser alterada o HTML
        this.escapar = false;
        // ele vai lá no Dom pegar a propriedade e jogar o valor no elemento/variavel elemento
        //fazendo essa logica para que o valor de escapar continue falso
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        //esse escapar é uma forma de seguraça para não adicionar informação no meu HTML
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
