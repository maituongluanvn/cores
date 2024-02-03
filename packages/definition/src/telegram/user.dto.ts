import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
// https://core.telegram.org/bots/api#user
export class UserDto {
  @Prop({ required: true })
  @IsNotEmpty()
  id: number;

  @Prop({ required: true })
  @IsNotEmpty()
  is_bot: boolean;

  @Prop({ required: true })
  @IsNotEmpty()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  username: string;
}
