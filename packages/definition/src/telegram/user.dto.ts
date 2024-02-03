import { Prop } from '@nestjs/mongoose';
// https://core.telegram.org/bots/api#user
export class UserDto {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  is_bot: boolean;

  @Prop({ required: true })
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  username: string;
}
