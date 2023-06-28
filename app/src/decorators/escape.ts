export function escape() {
    return function (
        target: any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginhal = descriptor.value;
        descriptor.value = function (...args: Array<any>){
            let retorno = metodoOriginhal.apply(this, args);

            return retorno;
        }

        // retornando o descriptor
        return descriptor;
    }
}