import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateCalculatorDto {
  @IsNumber()
  @ApiProperty()
  cashValue: number;

  @IsNumber()
  @ApiProperty()
  installmentValue: number;

  @IsNumber()
  @ApiProperty()
  numberOfInstallments: number;
}
