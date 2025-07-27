/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { Agricultor } from '../src/agricultor/entities/agricultor.entity';
import { AppModule } from '../src/app.module';

describe('Testes do Módulo Agricultor (e2e)', () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let agricultorId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: ":memory:",
          entities: [Agricultor], // <- diretamente aqui
          synchronize: true,
          dropSchema: true
        }),
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("01 - Deve Cadastrar um novo Agricultor", async () => {
    const resposta = await request(app.getHttpServer())
      .post('/agricultores')
      .send({
        fullName: 'Root',
        cpf: '62796039030', // deve ser adicionado um cpf valido
        birthDate: '2025-07-27',
        phone: "111111111",
        active: true,
      })
      .expect(201);

    agricultorId = resposta.body.id;
  });

});
