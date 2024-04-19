import {
  Body,
  Controller,
  Get,
  HttpException,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTopicSetArrayDto } from './dto/create-topic-set-array.dto.js';
import { TopicSetService } from './topic-set.service.js';

@Controller('topic-set')
export class TopicSetController {
  constructor(private readonly topicSetService: TopicSetService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createMany(@Body() content: CreateTopicSetArrayDto) {
    console.log(content);
    return this.topicSetService.createMany(content.topicSets);
  }

  @Get()
  async getOne() {
    return this.topicSetService.getOne();
  }

  @Patch()
  async reset() {
    return this.topicSetService.resetUsed();
  }
}
