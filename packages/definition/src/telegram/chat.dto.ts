import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
// https://core.telegram.org/bots/api#chat
export class ChatDto {
  @Prop({ required: true })
  @IsNotEmpty()
  id: number;

  @Prop()
  type: string[] = ['private', 'group', 'supergroup', 'channel'];

  @Prop()
  title: string;

  @Prop()
  username: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;
}
