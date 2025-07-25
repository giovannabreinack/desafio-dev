import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsCPF } from 'src/agricultor/decorators/is-cpf.decorator';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['cpf'])
export class Agricultor {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @IsString()
    @Column({ length: 100, nullable: false })
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @IsCPF({ message: 'CPF inválido' })
    @Column({ length: 11, nullable: false, unique: true })
    cpf: string;

    @IsOptional()
    @IsDate()
    @Column({ type: 'date', nullable: true })
    birthDate?: Date;

    @IsOptional()
    @IsString()
    @Column({ nullable: true })
    phone?: string;

    @IsBoolean()
    @Column({ default: true })
    active: boolean;
}


