import { Prop } from '@nestjs/mongoose';

export class TransactionDto {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: string;

  @Prop({ required: true, ref: 'currenciesType' })
  currency: string;

  @Prop({ required: true })
  spentedAt: Date;

  @Prop({ required: true })
  by: string;

  @Prop({ required: true, ref: 'spentType' })
  typeOfIncome: string;
}
