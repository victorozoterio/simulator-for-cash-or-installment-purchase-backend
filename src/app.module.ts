import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig, envConfig } from './config';
import { HealthzModule } from './modules/healthz/healthz.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    TypeOrmModule.forRootAsync(databaseConfig),
    HealthzModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
