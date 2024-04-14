import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SentenceService } from './sentence.service.js';
import { CreateSentenceDto } from './dto/create-sentence.dto.js';
import { CreateSentenceArrayDto } from './dto/create-sentence-array.dto.js';

@Controller('sentence')
export class SentenceController {
  constructor(private readonly sentenceService: SentenceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() dto: CreateSentenceDto) {
    return this.sentenceService.create(dto);
  }

  @Post('/createMany')
  @UsePipes(ValidationPipe)
  async createMany(@Body() sentences: CreateSentenceArrayDto) {
    return this.sentenceService.createMany(sentences.sentences);
  }

  @Get('')
  async getOneRandom() {
    return this.sentenceService.getOneRandom();
  }
}
