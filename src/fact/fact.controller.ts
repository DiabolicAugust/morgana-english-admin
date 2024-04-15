import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FactService } from './fact.service.js';
import { CreateFactArrayDto } from './dto/fact-array.dto.js';

@Controller('fact')
export class FactController {
  constructor(private readonly factService: FactService) {}
  @Post('/createMany')
  @UsePipes(ValidationPipe)
  async createMany(@Body() facts: CreateFactArrayDto) {
    return this.factService.createMany(facts.facts);
  }

  @Get()
  async getOne() {
    return this.factService.getOne();
  }

  @Patch()
  async resetUsed() {
    return this.factService.resetUsed();
  }
}
