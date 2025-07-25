import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgricultorModule } from './agricultor/agricultor.module';
import { Agricultor } from './agricultor/entities/agricultor.entity';

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
      logging: false,
    }),
    AgricultorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
