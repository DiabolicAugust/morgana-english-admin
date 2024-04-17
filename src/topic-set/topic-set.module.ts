import { Module } from '@nestjs/common';
import { TopicSetController } from './topic-set.controller';
import { TopicSetService } from './topic-set.service';

@Module({
  controllers: [TopicSetController],
  providers: [TopicSetService],
  imports: [],
})
export class TopicSetModule {}
