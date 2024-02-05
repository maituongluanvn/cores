// import { TransactionDto } from '@cores/definition';
import { MessageDto } from '@cores/definition';
import { Commands,  Message} from '@cores/botkit';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TelegramInstance } from '@common/axios';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { TelegramBodyDto } from '@cores/definition';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WebhookService {
  constructor(private readonly ins: TelegramInstance) {}

  private async sendMessage(message: any): Promise<void> {
    try {
      await this.ins.init().get(message.sendMessage('Hello from help'));
    } catch (error) {
      console.log('🚀 ~ WebhookService ~ sendMessage ~ error:', error);
    }
  }

  async help(message: any): Promise<any> {
    this.sendMessage(message);
  }
}
