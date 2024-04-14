import { IsNotEmpty, IsString } from 'class-validator';
import { Strings } from '../../data/strings.js';
import { Fields } from '../../data/enums.js';

export class CreateDayWordDto {
  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.wordOfDay),
  })
  @IsString({
    message: Strings.fieldMustBeString(Fields.wordOfDay),
  })
  wordOfDay: string;

  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.translation),
  })
  @IsString({
    message: Strings.fieldMustBeString(Fields.translation),
  })
  translation: string;

  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.history),
  })
  @IsString({
    message: Strings.fieldMustBeString(Fields.history),
  })
  history: string;

  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.fact),
  })
  @IsString({
    message: Strings.fieldMustBeString(Fields.fact),
  })
  fact: string;
}
