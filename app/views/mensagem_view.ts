import {Views} from "./views.js";

//extends que dizer que estou chamando a classe view para usar um elemento que existe lá
//estou recebendo de uma variavel generica T da class vew e passando para string
export class Mensagem_View extends Views <string>{

    template(model: string): string{
        return `
            <p class = "alert alert-info">${model}</p>
        `
    }
}