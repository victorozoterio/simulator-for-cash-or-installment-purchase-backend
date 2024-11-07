import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from './config';
import { HealthzModule } from './modules/healthz/healthz.module';
import { CalculatorModule } from './modules/calculator/calculator.module';

@Module({
  imports: [ConfigModule.forRoot(envConfig), HealthzModule, CalculatorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
