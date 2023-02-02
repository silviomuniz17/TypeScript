export class Negociacao {
    // para passar uma data quantidade e valor é passado por um contrutor
    //data: Date, quantidade: number, valor: number (tipando o tipo de variavel é em TS o nome primeiro depois o tipo)
    constructor(data, quantidade, valor) {
        // variavel em cima recebe o valor criado no construtor
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    // criar get para que possa ler os vaores da variavel
    // Date no final é o tipo de retorno que é uma variavel do tipo Data sempre é bom colocar para não dar problema
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    // criei um get para que possa fazer a conta de X direto
    get volume() {
        return this._quantidade * this._valor;
    }
}
