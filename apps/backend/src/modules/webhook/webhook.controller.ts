import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramBodyDto } from '@cores/definition';
import { getBotCommand } from '@cores/botkit';
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
  createTransaction(@Body() telegramIncomingMsg: TelegramBodyDto) {
    const command = getBotCommand(telegramIncomingMsg);
    console.log('🚀 ~ WebhookController ~ createTransaction ~ command:', command);
    return 'This action returns all cats';
  }
}
