import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Simulator for cash or installment purchase')
  .setDescription('Documentação do app back-end do simulator for cash or installment purchase.')
  .build();
