import { IsString } from 'class-validator';
import { isStringValidationOptions } from '@shared/dto-validation';

export class BaseStrategicPlanDto {
  @IsString(isStringValidationOptions())
  readonly name: string;
}
