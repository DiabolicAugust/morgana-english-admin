import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import {
  SharedFactModel,
  SharedSentenceModel,
  SharedTopicSetModel,
} from 'morgana-english-shared/dist/index.js';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
  imports: [SharedFactModel, SharedSentenceModel, SharedTopicSetModel],
})
export class StatisticsModule {}
