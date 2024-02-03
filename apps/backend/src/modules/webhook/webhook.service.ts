import { TransactionDto } from '@cores/definition';
import { MessageDto } from '@cores/definition';
import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

@Injectable()
export class WebhookService {
  // constructor(@InjectModel(Webhook.name) private m: Model<Webhook>) {}

  async create(): Promise<any> {
    // const createdCat = new this.m(transactionDto);
    // return createdCat.save();
    return null;
  }
}
