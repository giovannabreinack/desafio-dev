// src/decorators/is-cpf.decorator.ts
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export function IsCPF(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isCPF',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                validate(value: any, _args: ValidationArguments) {
                    return typeof value === 'string' && cpf.isValid(value);
                },
                defaultMessage() {
                    return 'CPF inválido';
                },
            },
        });
    };
}
