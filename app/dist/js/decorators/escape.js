export function escape() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginhal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginhal.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
