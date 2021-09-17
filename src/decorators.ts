import * as Functions from './functions';
export function sealed(p: string): Function {
    return function(target: Function): void {
        console.log(`Selaing with ${p}`);
        console.log(target);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}

export function Logger<TFunction extends Function>(target: TFunction): TFunction {
    const newCtor: Function = function() {
        console.log('new instance');
        console.log(target.name);
        this.age = 30;
    };
    newCtor.prototype = Object.create(target.prototype);
    newCtor.prototype.printLibrarian = function(): void {
        console.log(this.name, this.age);
    };
    return newCtor as TFunction;
}

export function writable(isWritable: boolean) {
    return function(target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log('Decorator started');
        descriptor.writable = isWritable;
        return  descriptor;
    };
}

export function format(pref: string = 'Mr./Mrs.') {
    return function(target: object, propertyName: string): void {
        Functions.makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
    };
}

export function positiveInteger(target: object, propertyName: string, descriptor) {
    const originalSet = descriptor.set;
    descriptor.set = function(value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('invalid');
        }
        originalSet.call(this, value);
    };
    return descriptor;
}