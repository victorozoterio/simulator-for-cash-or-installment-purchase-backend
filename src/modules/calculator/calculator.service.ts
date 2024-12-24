import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { CreateCalculatorDto } from './dto/create-calculator.dto';

@Injectable()
export class CalculatorService {
  private readonly selicApiUrl =
    'https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json';

  constructor(private readonly httpService: HttpService) {}

  private async getSelicRate(): Promise<number> {
    const { data } = await lastValueFrom(this.httpService.get(this.selicApiUrl));
    return Number.parseFloat(data[0].valor);
  }

  async create(dto: CreateCalculatorDto) {
    const selicRate = await this.getSelicRate();
    const monthlySelicRate = (1 + selicRate / 100) ** (1 / 12) - 1;

    let balance = dto.cashValue - dto.installmentValue;
    let totalEarnings = 0;
    let result = '';

    for (let i = 0; i < dto.numberOfInstallments; i++) {
      const earnings = balance * monthlySelicRate;
      balance += earnings;
      totalEarnings += earnings;
      balance -= dto.installmentValue;
    }

    const incomeTaxRate = 22.5;
    const netEarnings = totalEarnings * (1 - incomeTaxRate / 100);
    const totalInstallmentValue = dto.installmentValue * dto.numberOfInstallments;
    const cashSavings = totalInstallmentValue - dto.cashValue;

    const note = `It was taken into account a Selic rate of ${selicRate.toFixed(2)}%, an income tax rate of ${incomeTaxRate}%, and a simulation of an investment of R$${(totalInstallmentValue - dto.installmentValue).toFixed(2)} in a daily liquidity CDB (100% of CDI), where R$${dto.installmentValue} is withdrawn every month on the invoice closing date.`;

    if (netEarnings > cashSavings) {
      result = 'It is better to pay in installments';
    } else {
      result = 'It is better to pay in cash';
    }

    return {
      result,
      cashOption: `Paying in cash will save you R$${cashSavings.toFixed(2)}`,
      installmentOption: `Paying in installments will save you R$${netEarnings.toFixed(2)}`,
      note,
    };
  }
}
