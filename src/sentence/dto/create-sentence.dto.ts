import { IsNotEmpty, IsObject, IsString, Validate } from 'class-validator';
import { Strings } from '../../data/strings.js';
import { Type } from 'class-transformer';
import { Fields } from '../../data/enums.js';

class OptionsValidator {
  validate(value: any) {
    if (typeof value !== 'object') {
      return false;
    }
    const keys = Object.keys(value);
    return (
      keys.length === 3 && keys.every((key) => ['a', 'b', 'c'].includes(key))
    );
  }

  defaultMessage() {
    return Strings.sentenceOptionsValidation;
  }
}

export class CreateSentenceDto {
  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.sentence),
  })
  @IsString({
    message: Strings.fieldMustBeString(Fields.sentence),
  })
  sentence: string;

  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.answer),
  })
  @IsString({
    message: Strings.fieldMustBeString(Fields.answer),
  })
  answer: string;

  @IsNotEmpty({
    message: Strings.fieldMustNotBeEmpty(Fields.explanation),
  })
  @IsString({
    message: Strings.fieldMustBeString(Fields.explanation),
  })
  explanation: string;

  @IsObject()
  @Validate(OptionsValidator)
  @Type(() => Object) // Ensures correct transformation of nested objects
  options: Record<string, string>;
}
