// import { TransactionDto } from '@cores/definition';
import { MessageDto } from '@cores/definition';
import { Commands } from '@cores/botkit';
import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { TelegramBodyDto } from '@cores/definition';

@Injectable()
export class WebhookService {
  // constructor(@InjectModel(Webhook.name) private m: Model<Webhook>) {}

  async create(_body: TelegramBodyDto): Promise<any> {
    return null;
  }
}
