import { IsNumberString, MaxLength, MinLength } from 'class-validator';

export class FindOneParams {
  @IsNumberString()
  @MaxLength(16)
  @MinLength(16)
  cardNumber: string;
}
