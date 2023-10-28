import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const name = 'outcomes';

@ApiTags(name)
@Controller(name)
export class OutcomesController {
  @Get()
  findByParams(): string {
    return 'This action returns all cats';
  }
}
