import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramBodyDto } from '@cores/definition';
import { getBotCommand } from '@cores/botkit';
import { WebhookService } from './webhook.service';
// import { Transaction } from '@schemas/transaction.schema';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { connector } from '@telegram/connector';
// import { Model } from 'mongoose';
const name = '/telegram/webhook';

@ApiTags(name)
@Controller(name)
export class WebhookController {
  constructor(private readonly command: WebhookService) {}

  @Post()
  createTransaction(@Body() telegramIncomingMsg: TelegramBodyDto) {
    console.log(
      '🚀 ~ WebhookController ~ createTransaction ~ telegramIncomingMsg:',
      telegramIncomingMsg.message.entities,
    );
    const command = getBotCommand(telegramIncomingMsg);
    console.log('🚀 ~ WebhookController ~ createTransaction ~ command:', command);
    switch (command) {
      case '/help':
        this.command.help();
        break;
      default:
        break;
    }
    console.log('🚀 ~ WebhookController ~ createTransaction ~ command:', command);
    return 'This action returns all cats';
  }
}
