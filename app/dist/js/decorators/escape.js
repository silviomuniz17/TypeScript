export function escape() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginhal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginhal.apply(this, args);
            if (typeof retorno === 'string') {
            }
            return retorno;
        };
        return descriptor;
    };
}
