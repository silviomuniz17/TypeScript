// elemento do Dom são os elemento que tem em uma pagina HTML como div, p, h1
export class Negociacoes_Views {
    //criando um contrutor para que possa pegar o id 'negociacoes_views' no indexs.HTML
    constructor(seletor) {
        // ele vai lá no Dom pegar a propriedade e jogar o valor no elemento/variavel elemento
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.listar().map(negociacao => {
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat()
                .format(negociacao.data)}
                            </td>
                            <td>
                                ${negociacao.quantidade}
                            </td>
                            <td>
                                ${negociacao.valor}
                            </td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
