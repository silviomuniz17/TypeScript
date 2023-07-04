export function escape() {
    return function (
        target: any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginhal = descriptor.value;
        descriptor.value = function (...args: Array<any>){
            let retorno = metodoOriginhal.apply(this, args);
            //esse escapar é uma forma de seguraça para não adicionar informação no meu HTML
            if (typeof retorno === 'string'){
             /* console.log(`@escape em ação na classe ${this.constructor.name} para o metodo ${propertyKey}` );
                 retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');  */
            }

            return retorno;
        }

        // retornando o descriptor
        return descriptor;
    }
}
