import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionDto } from '@cores/definition';
import { Transaction } from '@schemas/transaction.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { connector } from '@telegram/connector';
import { Model } from 'mongoose';

const name = 'transaction';

@ApiTags(name)
@Controller(name)
export class TransactionController {
  constructor(@InjectModel(Transaction.name) private m: Model<Transaction>) {}

  @Post()
  createTransaction(): string {
    connector();
    return 'This action returns all cats';
  }
}
