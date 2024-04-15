import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from 'class-validator';
import { CreateFactDto } from './fact.dto.js';

export class CreateFactArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFactDto)
  facts: CreateFactDto[];
}
