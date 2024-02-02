import { TransactionDto } from '@cores/definition';
import { Transaction } from '@schemas/transaction.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransactionService {
  constructor(@InjectModel(Transaction.name) private m: Model<Transaction>) {}

  async create(transactionDto: TransactionDto): Promise<Transaction> {
    const createdCat = new this.m(transactionDto);
    return createdCat.save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.m.find().exec();
  }
}
