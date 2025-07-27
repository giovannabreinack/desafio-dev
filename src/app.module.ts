import { Module } from '@nestjs/common';
import { AgricultorModule } from './agricultor/agricultor.module';

@Module({
  imports: [
    AgricultorModule,
  ],
})
export class AppModule { }

