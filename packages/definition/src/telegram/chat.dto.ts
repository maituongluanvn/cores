import { Prop } from '@nestjs/mongoose';
// https://core.telegram.org/bots/api#chat
export class ChatDto {
  @Prop({ required: true })
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
