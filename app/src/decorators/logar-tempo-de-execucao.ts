//função utilizada para saber quanto tempo demora uma função assim sei se ela é rapida ou não
// podendo utilizala em qualquer lugar do codigo
// estou passando um valor do tipo boolean que recebe false pois não estou enviando nenhum valor a ele
export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ) {
        //guardando o metodo chamado original que vai calcular o tempo
        const  metodoOriginal = descriptor.value;

        //criando uma função onde pode receber qualquer quantidade de valor do tipo any que é tranformada em array
        descriptor.value = function (...args: Array<any>){

            // criando uma divisão para que possa escolher se quero em segundos ou milesegundos
            let divisor = 1;
            let unidade = 'milesegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            // recebendo o tempo de agora para calcular o tempo de execução
            const t1 = performance.now();
            // chamando metodo original para fazer o calculo
            const retorno = metodoOriginal.apply(this, args);
            // recebendo o tempo de agora para calcular o tempo de execução
            const t2 = performance.now();
            console.log(`O tempo de execução do metodo ${propertyKey}: ${(t2 - t1)/divisor} ${unidade}`);
            retorno
        }
        return descriptor;
    }
}