import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramBodyDto } from '@cores/definition';
// import { Transaction } from '@schemas/transaction.schema';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { connector } from '@telegram/connector';
// import { Model } from 'mongoose';
const name = '/telegram/webhook';

@ApiTags(name)
@Controller(name)
export class WebhookController {
  // constructor(@InjectModel(Transaction.name) private m: Model<Transaction>) {}

  @Post()
  createTransaction(@Body() telegramIncomingMsg: TelegramBodyDto): string {
    return 'This action returns all cats';
  }
}
