import { Controller, Get } from '@nestjs/common';

@Controller('incomes')
export class IncomesController {
  @Get()
  findByParams(): string {
    return 'This action returns all cats';
  }
}
