import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsCPF } from "../decorators/is-cpf.decorator";

@Entity({ name: "tb_agricultores" })
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


