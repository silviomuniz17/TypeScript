//função utilizada para saber quanto tempo demora uma função assim sei se ela é rapida ou não
// podendo utilizala em qualquer lugar do codigo
export function logarTempoDeExecucao() {
    return function (
        target: any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ) {
        //guardando o metodo chamado original que vai calcular o tempo
        const  metodoOriginal = descriptor.value;

        //criando uma função onde pode receber qualquer quantidade de valor do tipo any que é tranformada em array
        descriptor.value = function (...args: Array<any>){
            // recebendo o tempo de agora para calcular o tempo de execução
            const t1 = performance.now();
            // chamando metodo original para fazer o calculo
            const retorno = metodoOriginal.apply(this, args);
            // recebendo o tempo de agora para calcular o tempo de execução
            const t2 = performance.now();
            console.log(`O tempo de execução do metodo ${propertyKey}: ${(t2 - t1)/1000} segundos`);
            retorno
        }
        return descriptor;
    }
}