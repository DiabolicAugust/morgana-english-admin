import { Module } from '@nestjs/common';
import { FactController } from './fact.controller';
import { FactService } from './fact.service';
import { SharedFactModel } from 'morgana-english-shared/dist/index.js';

@Module({
  controllers: [FactController],
  providers: [FactService],
  imports: [SharedFactModel],
})
export class FactModule {}
