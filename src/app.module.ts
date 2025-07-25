import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agricultor } from './agricultor/entities/agricultor.entity';
import { AgricultorModule } from './agricultor/agricultor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234567',
      database: 'db_agricultor',
      entities: [Agricultor],
      synchronize: true,
      logging: true,
    }),
    AgricultorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
