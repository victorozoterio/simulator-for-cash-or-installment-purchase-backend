import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('ms-template')
  .setDescription('Documentação do app back-end do ms-template.')
  .build();
