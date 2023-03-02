import { Views } from "./views.js";
export class Mensagem_View extends Views {
    template(model) {
        return `
            <p class = "alert alert-info">${model}</p>
        `;
    }
}
