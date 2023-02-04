// elemento do Dom são os elemento que tem em uma pagina HTML como div, p, h1
export class Negociacoes_Views {
    //criando um contrutor para que possa pegar o id 'negociacoes_views' no indexs.HTML
    constructor(seletor) {
        // ele vai lá no Dom pegar a propriedade e jogar o valor no elemento/variavel elemento
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        // retornando uma tabela com a classe table (HTML bootStrap)
        return '<table class = "table table-hover table-bordered">' +
            '<thead>' +
            '<tr>' +
            '<th>DATA</th>' +
            '<th>QUANTIDADE</th>' +
            '<th>VALOR</th>' +
            '</tr>' +
            '</thead>' +
            '</table>' + //pegando os valores passado na variavel model que é da negociação e por ser string estou mapeando
            '<tbory> ${model.lista().map( negociacao => {' +
            'retur } ' +
            ')}' +
            '</tbory>';
    }
    update(model) {
        // esse update serve para ele pegar o elemento em HTML e jogar no formato dom para que possa ser impresso
        //a variavel que foi enviada no construtor estou recebendo ela aqui e passando tbm pa o templete á ciam
        this.elemento.innerHTML = this.template(model);
    }
}
