import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpentTypeDocument = HydratedDocument<SpentType>;

@Schema({ timestamps: true, collection: 'spentType' })
export class SpentType {
  @Prop({ required: true })
  typeName: string;
}

export const SpentTypeSchema = SchemaFactory.createForClass(SpentType);
