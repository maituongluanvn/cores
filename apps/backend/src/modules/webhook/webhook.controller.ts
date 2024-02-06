import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramBodyDto } from '@cores/definition';
import { getBotCommand, Message } from '@cores/botkit';
import { WebhookService } from './webhook.service';
// import { Transaction } from '@schemas/transaction.schema';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { connector } from '@telegram/connector';
// import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
const name = '/telegram/webhook';

@ApiTags(name)
@Controller(name)
export class WebhookController {
  constructor(
    private readonly command: WebhookService,
    private configSvc: ConfigService,
  ) {}

  @Post()
  createTransaction(@Body() telegramIncomingMsg: TelegramBodyDto): void {
    console.log(this.configSvc.get<string>('telegramBotToken'));
    console.log(
      '🚀 ~ WebhookController ~ createTransaction ~ telegramIncomingMsg:',
      telegramIncomingMsg,
    );
    const command = getBotCommand(telegramIncomingMsg);
    if (typeof command === 'string') {
      const message = new Message(telegramIncomingMsg);
      this.command[`${command.replace('/', '')}`](message);
    }
  }
}
