import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DayWordService } from './day-word.service.js';
import { CreateDayWordDto } from './dto/create-day-word.dto.js';

@Controller('day-word')
export class DayWordController {
  constructor(private readonly dayWordService: DayWordService) {}
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() dto: CreateDayWordDto) {
    return this.dayWordService.create(dto);
  }

  @Post('/createMany')
  @UsePipes(ValidationPipe)
  async createMany(@Body('content') content: [CreateDayWordDto]) {
    return this.dayWordService.createMany(content);
  }

  @Get()
  async getRandom() {
    return this.dayWordService.getOneRandom();
  }

  @Patch()
  async resetUsed() {
    return this.dayWordService.resetUsed();
  }
}
