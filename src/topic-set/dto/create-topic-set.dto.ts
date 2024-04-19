import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Strings } from '../../data/strings.js';
import { Fields } from '../../data/enums.js';
import { Word } from 'morgana-english-shared/dist/models/word.model.js';
import { Type } from 'class-transformer';
import { CreateWordDto } from './create-word.dto.js';

export class CreateTopicSetDto {
  @IsString({ message: Strings.fieldMustBeString(Fields.topic) })
  @IsNotEmpty({ message: Strings.fieldMustNotBeEmpty(Fields.topic) })
  topic: string;

  @IsString({ message: Strings.fieldMustBeString(Fields.topicTranslation) })
  @IsNotEmpty({ message: Strings.fieldMustNotBeEmpty(Fields.topicTranslation) })
  topicTranslation: string;

  @IsString({ message: Strings.fieldMustBeString(Fields.sentence) })
  @IsNotEmpty({ message: Strings.fieldMustNotBeEmpty(Fields.sentence) })
  sentence: string;

  @IsString({ message: Strings.fieldMustBeString(Fields.sentenceTranslation) })
  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.sentenceTranslation),
  })
  sentenceTranslation: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWordDto)
  words: CreateWordDto[];
}
