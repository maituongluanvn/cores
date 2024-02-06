// import { TransactionDto } from '@cores/definition';
import { MessageDto } from '@cores/definition';
import { Commands, Message } from '@cores/botkit';
import { Injectable, BadGatewayException } from '@nestjs/common';
// import axios from 'axios';
import { TelegramBotInstance } from '@common/axios';
// import { telegramInstance } from '@config';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { TelegramBodyDto } from '@cores/definition';
// import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WebhookService {
  config: any;
  constructor() {}

  async help(message: any): Promise<any> {
    try {
      const parameters: string = message.sendMessage('Hello from help');
      await TelegramBotInstance.get(parameters);
    } catch (error) {
      new BadGatewayException(error);
    }
  }
}
