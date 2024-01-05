import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IncomeDocument = HydratedDocument<Income>;

@Schema({ timestamps: true, collection: 'incomes' })
export class Income {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  spentedAt: Date;

  @Prop({ required: true })
  by: string;

  @Prop({ required: true, ref: 'spentType' })
  typeOfIncome: string;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
