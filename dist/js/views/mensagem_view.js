import { Views } from "./views.js";
//extends que dizer que estou chamando a classe view para usar um elemento que existe lá
//estou recebendo de uma variavel generica T da class vew e passando para string
export class Mensagem_View extends Views {
    // protected quer dizer que apenas o pai e filho vai ter acesos assim no principal tbm não vai aparecer apenas o updat
    template(model) {
        return `
            <p class = "alert alert-info">${model}</p>
        `;
    }
}
