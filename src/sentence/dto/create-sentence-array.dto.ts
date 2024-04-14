import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from 'class-validator';
import { CreateSentenceDto } from './create-sentence.dto';

export class CreateSentenceArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSentenceDto)
  sentences: CreateSentenceDto[];
}
