export class Negociacao {
    // para passar uma data quantidade e valor é passado por um contrutor
    constructor(data, quantidade, valor) {
        // variavel em cima recebe o valor criado no construtor
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    // criar get para que possa ler os vaores da variavel para que possa ser lido
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
