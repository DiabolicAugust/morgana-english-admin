import { IsNotEmpty, IsString } from 'class-validator';
import { Strings } from '../../data/strings.js';
import { Fields } from '../../data/enums.js';

export class CreateFactDto {
  @IsNotEmpty({ message: Strings.fieldMustNotBeEmpty(Fields.fact) })
  @IsString({ message: Strings.fieldMustBeString(Fields.fact) })
  fact: string;

  @IsNotEmpty({ message: Strings.fieldMustNotBeEmpty(Fields.translation) })
  @IsString({ message: Strings.fieldMustBeString(Fields.translation) })
  translation: string;
}
