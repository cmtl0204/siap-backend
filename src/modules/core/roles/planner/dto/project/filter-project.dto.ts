import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '@shared/dto';

export class FilterProjectDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly registerNumber: string;

  @IsOptional()
  @IsString()
  readonly systemOrigin: string;
}
