export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginhal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Metodo: ${propertyKey}`);
            console.log(`----- Parametro: ${JSON.stringify(args)}`);
            const retorno = metodoOriginhal.apply(this, args);
            console.log(`-------- Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
