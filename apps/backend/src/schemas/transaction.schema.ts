import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TransactionDto } from '@cores/definition';

export type TransactionDocument = HydratedDocument<TransactionDto>;

@Schema({ timestamps: true, collection: 'incomes' })
export class Transaction extends TransactionDto {}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
