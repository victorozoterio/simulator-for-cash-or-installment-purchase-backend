import { ConfigModuleOptions } from '@nestjs/config';
import { Environments } from 'src/utils';
import * as Joi from 'joi';

const environments = Object.values(Environments);

export const validator = Joi.object({
  NODE_ENV: Joi.string().valid(...environments),
  PORT: Joi.number().default(3000),
  DB_NAME: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_SSL_MODE: Joi.boolean().default(true),
});

export const envConfig: ConfigModuleOptions = {
  validationSchema: validator,
  isGlobal: true,
  cache: true,
  envFilePath: ['.env', '.env.local', '.env.dev', '.env.hml', '.env.prd'],
};
