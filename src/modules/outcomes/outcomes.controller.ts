import { Controller, Get } from '@nestjs/common';

@Controller('outcomes')
export class OutcomesController {
  @Get()
  findByParams(): string {
    return 'This action returns all cats';
  }
}
