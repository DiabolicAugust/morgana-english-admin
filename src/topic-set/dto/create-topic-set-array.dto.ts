import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from 'class-validator';
import { CreateTopicSetDto } from './create-topic-set.dto.js';

export class CreateTopicSetArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTopicSetDto)
  topicSets: CreateTopicSetDto[];
}
