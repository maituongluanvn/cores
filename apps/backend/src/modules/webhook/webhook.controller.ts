import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramBodyDto } from '@cores/definition';
import { Commands } from '@cores/botkit';
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
    console.log(
      '🚀 ~ WebhookController ~ createTransaction ~ _telegramIncomingMsg:',
      telegramIncomingMsg.message,
    );
    return 'This action returns all cats';
  }
}
