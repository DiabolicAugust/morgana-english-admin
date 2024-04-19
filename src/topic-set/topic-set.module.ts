import { Module } from '@nestjs/common';
import { TopicSetController } from './topic-set.controller';
import { TopicSetService } from './topic-set.service';
import { SharedTopicSetModel } from 'morgana-english-shared/dist/index.js';

@Module({
  controllers: [TopicSetController],
  providers: [TopicSetService],
  imports: [SharedTopicSetModel],
})
export class TopicSetModule {}
