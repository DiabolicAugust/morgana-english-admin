import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service.js';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('/topicSets')
  async getTopicSets() {
    return this.statisticsService.getTopicSetsStatistics();
  }

  @Get('/facts')
  async getFacts() {
    return this.statisticsService.getFactStatistics();
  }

  @Get('/sentences')
  async getSentences() {
    return this.statisticsService.getSentenceStatistics();
  }
}
