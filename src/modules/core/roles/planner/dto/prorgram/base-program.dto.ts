import { IsDate, IsPositive, IsString } from 'class-validator';
import {
  isDateValidationOptions,
  isPositiveValidationOptions,
  isStringValidationOptions,
} from '@shared/dto-validation';

export class BaseProgramDto {
  @IsString(isStringValidationOptions())
  readonly code: string;

  @IsString(isStringValidationOptions())
  readonly name: string;

  @IsPositive(isPositiveValidationOptions())
  readonly term: number;

  @IsPositive(isPositiveValidationOptions())
  readonly amount: number;

  @IsDate(isDateValidationOptions())
  readonly startedAt: Date;

  @IsDate(isDateValidationOptions())
  readonly endedAt: Date;

  @IsString(isStringValidationOptions())
  readonly executorUndersecretary: string;
}
