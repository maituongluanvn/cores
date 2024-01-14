import { Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

const name = 'transaction';

@ApiTags(name)
@Controller(name)
export class TransactionController {
  @Post()
  createTransaction(@Req() request: Request): string {
    request;
    return 'This action returns all cats';
  }
}
