import { ConfigModuleOptions } from '@nestjs/config';
import { Environments } from '../utils';
import * as Joi from 'joi';

const environments = Object.values(Environments);

export const validator = Joi.object({
  NODE_ENV: Joi.string().valid(...environments),
  PORT: Joi.number().default(3000),
});

export const envConfig: ConfigModuleOptions = {
  validationSchema: validator,
  isGlobal: true,
  cache: true,
  envFilePath: ['.env', '.env.local', '.env.dev', '.env.hml', '.env.prd'],
};
