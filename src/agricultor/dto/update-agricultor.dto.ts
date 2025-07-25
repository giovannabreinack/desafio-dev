import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAgricultorDto {
    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    birthDate?: Date;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsBoolean()
    active?: boolean;

}
