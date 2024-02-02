import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { Transaction, TransactionSchema } from '@schemas/transaction.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])],
  controllers: [TransactionController],
})
export default class CatsModule {}
