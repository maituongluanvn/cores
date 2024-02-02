import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TransactionDto } from '@cores/definition';

export type IncomeDocument = HydratedDocument<TransactionDto>;

@Schema({ timestamps: true, collection: 'incomes' })
// let Income = Object.assign(Object.create(Object.getPrototypeOf(TransactionDto)), TransactionDto)
export class Income extends TransactionDto {}

export const IncomeSchema = SchemaFactory.createForClass(Income);
