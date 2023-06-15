// Criando uma função que vai se chamar inspect
export function inspect() {
    return function (
        target: any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ){
        // guardando o metodo original já criar o retorno para não esquecer (return descriptor;)
        const metodoOriginhal = descriptor.value;
        //criando uma função onde pode receber qualquer quantidade de valor do tipo any que é tranformada em array
        descriptor.value = function (...args: Array<any>){
            // log para trazer o nome do metodo
            console.log(`--- Metodo: ${propertyKey}`);
            //log para saber qual os paremetros do metodo
            console.log(`----- Parametro: ${JSON.stringify(args)}`)
            const retorno = metodoOriginhal.apply(this, args);
            // log para saber qual o retorno do metodo
            console.log(`-------- Retorno: ${JSON.stringify(retorno)}`)
            return retorno;
        }

        // retornando o descriptor
        return descriptor;
    }
}