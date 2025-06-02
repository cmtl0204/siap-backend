import { IsDate, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import {
  isDateValidationOptions,
  isNotEmptyValidationOptions,
  isPositiveValidationOptions,
  isStringValidationOptions,
} from '@shared/dto-validation';
import { ProgramEntity } from '@modules/core/entities';
import { UserEntity } from '@auth/entities';

export class BaseProjectDto {
  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly program: ProgramEntity;

  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly user: UserEntity;

  @IsPositive(isPositiveValidationOptions())
  readonly amount: number;

  @IsString(isStringValidationOptions())
  readonly code: string;

  @IsString(isStringValidationOptions())
  readonly name: string;

  @IsString(isStringValidationOptions())
  readonly coexecutorManagement: string;

  @IsString(isStringValidationOptions())
  readonly executorManagement: string;

  @IsString(isStringValidationOptions())
  readonly executorUndersecretary: string;

  @IsPositive(isPositiveValidationOptions())
  readonly term: number;

  @IsDate(isDateValidationOptions())
  readonly startedAt: Date;

  @IsDate(isDateValidationOptions())
  readonly endedAt: Date;
}
