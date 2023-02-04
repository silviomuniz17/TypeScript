export class Negociacao {
    // quando eu coloco # quer dizer que não pode ser alterado fora da classe (no JS) 
    //quando uma variavel é privada no TS é escrito private nome da variavel e depois o tipo dela
    // para passar uma data quantidade e valor é passado por um contrutor
    //data: Date, quantidade: number, valor: number (tipando o tipo de variavel é em TS o nome primeiro depois o tipo)
    constructor(_data, _quantidade, 
    //essa é uma outra forma de criar uma variavel que eu possa ler sem precisar criar o get, e que não possa ser alterada de forma alguma
    valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this.valor = valor;
    }
    // criar get para que possa ler os vaores da variavel
    // Date no final é o tipo de retorno que é uma variavel do tipo Data sempre é bom colocar para não dar problema
    get data() {
        //estou fazendo uma copia identica do valor da data pois ela pode ser alterada mesmo sendo privada
        //criando um construtos onde data recebe um copia daquele ezato momento para que possa ser impresso logo a baixo
        //Chamada de programação defensiva
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    // criei um get para que possa fazer a conta de X direto
    get volume() {
        return this._quantidade * this.valor;
    }
}
