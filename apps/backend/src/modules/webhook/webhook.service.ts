// import { TransactionDto } from '@cores/definition';
import { MessageDto } from '@cores/definition';
import { Commands } from '@cores/botkit';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { TelegramBodyDto } from '@cores/definition';

@Injectable()
export class WebhookService {
  // constructor(@InjectModel(Webhook.name) private m: Model<Webhook>) {}

  async help(): Promise<any> {
    await axios.get(
      `https://api.telegram.org/bot6944107952:AAF6w2oDN1w430r3WjJLBOS1hkT_3jV5_xQ/sendMessage?text=ia ia ia ia ia&chat_id=829142913l`,
    );
    return '';
  }
}
