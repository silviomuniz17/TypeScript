export class Negociacao {
    // quando eu coloco # quer dizer que não pode ser alterado fora da classe (no JS) 
    //quando uma variavel é privada no TS é escrito private nome da variavel e depois o tipo dela
    
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    // para passar uma data quantidade e valor é passado por um contrutor
    //data: Date, quantidade: number, valor: number (tipando o tipo de variavel é em TS o nome primeiro depois o tipo)
    constructor(data: Date, quantidade: number, valor: number) {
        // variavel em cima recebe o valor criado no construtor
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // criar get para que possa ler os vaores da variavel
    // Date no final é o tipo de retorno que é uma variavel do tipo Data sempre é bom colocar para não dar problema
    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    // criei um get para que possa fazer a conta de X direto
    get volume(): number {
        return this._quantidade * this._valor;
    }

}