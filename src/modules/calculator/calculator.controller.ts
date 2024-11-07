import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('calculator')
@ApiTags('Calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  @ApiOperation({ summary: 'Calculate whether it is better to pay in cash or in installments.' })
  @ApiResponse({ status: 201, type: CreateCalculatorDto })
  async create(@Body() dto: CreateCalculatorDto) {
    return this.calculatorService.create(dto);
  }
}
