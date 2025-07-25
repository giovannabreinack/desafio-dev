import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Agricultor } from "../entities/agricultor.entity";

@Injectable()
export class AgricultorService {
    constructor(
        @InjectRepository(Agricultor)
        private agricultorRepository: Repository<Agricultor>,
    ) { }

    async findAll(): Promise<Agricultor[]> {
        return await this.agricultorRepository.find({
        });
    }

    async findById(id: number): Promise<Agricultor> {
        const agricultor_id = await this.agricultorRepository.findOne({
            where: {
                id
            },
        });

        if (!agricultor_id)
            throw new HttpException('Agricultor não encontrado!', HttpStatus.NOT_FOUND);

        return agricultor_id;
    }

    async findByCpf(cpf: string): Promise<Agricultor> {
        const agricultor_cpf = await this.agricultorRepository.findOne({
            where: {
                cpf
            },
        });

        if (!agricultor_cpf)
            throw new HttpException('CPF não encontrado!', HttpStatus.NOT_FOUND);

        return agricultor_cpf;
    }

    async findAllByNome(fullName: string): Promise<Agricultor[]> {
        return await this.agricultorRepository.find({
            where: {
                fullName: ILike(`%${fullName}%`)
            }
        })
    }

    async create(agricultor: Agricultor): Promise<Agricultor> {
        return await this.agricultorRepository.save(agricultor);
    }

    async update(agricultor: Agricultor): Promise<Agricultor> {
        await this.findById(agricultor.id)
        return await this.agricultorRepository.save(agricultor);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id)
        return await this.agricultorRepository.delete(id)
    }
}