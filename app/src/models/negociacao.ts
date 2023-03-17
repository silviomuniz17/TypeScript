export class Negociacao {
    // quando eu coloco # quer dizer que não pode ser alterado fora da classe (no JS) 
    //quando uma variavel é privada no TS é escrito private nome da variavel e depois o tipo dela

    // para passar uma data quantidade e valor é passado por um contrutor
    //data: Date, quantidade: number, valor: number (tipando o tipo de variavel é em TS o nome primeiro depois o tipo)

    constructor(
        private _data: Date,
        private _quantidade: number,
        //essa é uma outra forma de criar uma variavel que eu possa ler sem precisar criar o get, e que não possa ser alterada de forma alguma
        public readonly valor: number) {}

    // criar get para que possa ler os vaores da variavel
    // Date no final é o tipo de retorno que é uma variavel do tipo Data sempre é bom colocar para não dar problema
    get data(): Date {
        //estou fazendo uma copia identica do valor da data pois ela pode ser alterada mesmo sendo privada
        //criando um construtos onde data recebe um copia daquele ezato momento para que possa ser impresso logo a baixo
        //Chamada de programação defensiva
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    // criei um get para que possa fazer a conta de X direto
    get volume(): number {
        return this._quantidade * this.valor;
    }

    // crieu um metodo para já receber uma string assim não precisa converter. ela é do tipo static podendo tem acesso á ela sempre. ela é do tipo negociacao
    public static criaDe(dataString: string, quantidadeString: string, valorString: string ): Negociacao{
        // criando uma expreção regular que pega todas ' - '
        const exp = /-/g;
        // (convertendo para tipo Date)criando uma contante que pega o valor a minha variavel inputDate e troca o - por , (isso pois a varialvel HTLM vem ano - mes - dia e precisa ser ano , mes , dias)
        const date = new Date(dataString.replace(exp, ','))
        //convertende o valor de inputQuantidade para interio
        const quantidade = parseInt(quantidadeString);
        // convertendo o parseValue para float já que valor pode ter descimais
        const valor = parseFloat(valorString);
        //importar valores da variavel já convertidos para o formato correto para Negociacao
        //precisa ser na ordem correta
        return new Negociacao(date, quantidade, valor);
    }

}