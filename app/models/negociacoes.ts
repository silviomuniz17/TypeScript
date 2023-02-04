//exportando uma classe para que todo o sistema possa puxar e usar
//essa classe vai gardar todas as negociaçoes que foram feitas
//apenas salvar não apagar

//importando negociação para usar a variavel criada lá
import {Negociacao} from "./negociacao.js";

export class Negociacoes{

    //criando um arrei nogociacoes do tipo Array e o tipo de array é negociaçao com as 3 variaveis
    //para criar um aray pode ser feito de duas formas
    // " Array<Negociacao> = [] " ou " Negociacao[] = [] " é a mesma coisa
    private negociacoes: Array<Negociacao> = [];


    //criando um metodo que adiciona valor ao array
    // o array criado recebe os valores da variavel
    adiciona(negociacao: Negociacao){
        //essa negociação envia uma negociação
        this.negociacoes.push(negociacao);
    }

    // criando uma lista para imprimir os valores salvos
    // ReadonlyArray esse é identico ao Arrey porem não existe nenhuma forma de alterar os dados dela
    // " ReadonlyArray<Negociacao> = [] " ou " readonly Negociacao [] " é a mesma coisa
    listar(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}