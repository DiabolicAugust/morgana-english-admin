import { IsNotEmpty, IsString } from 'class-validator';
import { Strings } from '../../data/strings.js';
import { Fields } from '../../data/enums.js';

export class CreateWordDto {
  @IsString({ message: Strings.fieldMustBeString(Fields.translation) })
  @IsNotEmpty({ message: Strings.fieldMustNotBeEmpty(Fields.translation) })
  word: string;
  @IsString({ message: Strings.fieldMustBeString(Fields.translation) })
  @IsNotEmpty({ message: Strings.fieldMustNotBeEmpty(Fields.translation) })
  translation: string;
}
