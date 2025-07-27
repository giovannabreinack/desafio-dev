import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsCPF } from '../decorators/is-cpf.decorator';

export class CreateAgricultorDto {
    @IsNotEmpty({ message: 'Nome completo é obrigatório' })
    @IsString()
    fullName: string;

    @IsNotEmpty({ message: 'CPF é obrigatório' })
    @IsCPF({ message: 'CPF inválido' })
    cpf: string;

    @IsOptional()
    @Type(() => Date)
    birthDate?: Date;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsBoolean()
    active?: boolean;
}
