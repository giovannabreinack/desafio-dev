import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AgricultorController } from "./controllers/agricultor.controller";
import { Agricultor } from "./entities/agricultor.entity";
import { AgricultorService } from "./services/agricultor.service";

@Module({
    imports: [TypeOrmModule.forFeature([Agricultor])],
    controllers: [AgricultorController],
    providers: [AgricultorService],
    exports: [AgricultorService]
})
export class AgricultorModule { }