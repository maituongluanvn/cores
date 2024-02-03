import { Prop } from '@nestjs/mongoose';
import { UserDto } from './user.dto';
import { ChatDto } from './chat.dto';
import { IsNotEmpty } from 'class-validator';
// https://core.telegram.org/bots/api#message
export class MessageDto {
  @Prop({ required: true })
  @IsNotEmpty()
  message_id: number;

  @Prop()
  message_thread_id: number;

  @Prop()
  date: number;

  @Prop()
  from: UserDto;

  @Prop()
  chat: ChatDto;
}

export class TelegramBodyDto {
  @Prop({ required: true })
  @IsNotEmpty()
  update_id: number;

  @Prop()
  message: MessageDto;
}
