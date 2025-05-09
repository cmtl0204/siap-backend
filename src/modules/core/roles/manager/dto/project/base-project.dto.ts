import { IsDate, IsOptional, IsPositive, IsString } from 'class-validator';
import {
  isDateValidationOptions,
  isPositiveValidationOptions,
  isStringValidationOptions,
} from '@shared/dto-validation';
import { UserEntity } from '@auth/entities';

export class BaseProjectDto {
  @IsOptional()
  readonly user: UserEntity;

  @IsString(isStringValidationOptions())
  readonly area: string;

  @IsString(isStringValidationOptions())
  readonly unit: string;

  @IsString(isStringValidationOptions())
  readonly code: string;

  @IsString(isStringValidationOptions())
  readonly program: string;

  @IsString(isStringValidationOptions())
  readonly programCode: string;

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
}
