import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateAgricultorDto } from '../dto/create-agricultor.dto';
import { UpdateAgricultorDto } from '../dto/update-agricultor.dto';
import { Agricultor } from '../entities/agricultor.entity';
import { AgricultorService } from '../services/agricultor.service';

@Controller('/agricultores')
export class AgricultorController {
    constructor(private readonly agricultorService: AgricultorService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Agricultor[]> {
        return this.agricultorService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Agricultor> {
        return this.agricultorService.findById(id);
    }

    @Get('/cpf/:cpf')
    @HttpCode(HttpStatus.OK)
    async findByCpf(@Param('cpf') cpf: string): Promise<Agricultor> {
        return this.agricultorService.findByCpf(cpf);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    async findByNome(@Param('nome') nome: string): Promise<Agricultor[]> {
        return this.agricultorService.findAllByNome(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dto: CreateAgricultorDto): Promise<Agricultor> {
        return this.agricultorService.create(dto);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateAgricultorDto,
    ): Promise<Agricultor> {
        return this.agricultorService.update(id, dto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const agricultor = await this.agricultorService.findById(id);

        if (agricultor.active) {
            throw new HttpException(
                'Não é possível excluir um agricultor ativo.',
                HttpStatus.BAD_REQUEST,
            );
        }

        await this.agricultorService.delete(id);
    }
}
