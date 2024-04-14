import { Module } from '@nestjs/common';
import { DayWordController } from './day-word.controller';
import { DayWordService } from './day-word.service';
import { SharedDayWordModel } from 'morgana-english-shared/dist/index.js';

@Module({
  controllers: [DayWordController],
  providers: [DayWordService],
  imports: [SharedDayWordModel],
})
export class DayWordModule {}
