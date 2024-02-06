import { TelegramBodyDto, MessageEntityType } from '@cores/definition';
import _ from 'underscore';

export function getBotCommand(body: TelegramBodyDto): string | Error {
  if (body.message?.entities[0].type === MessageEntityType.bot_command) {
    return body.message.text;
  }
  return new Error(`It's not bot command: ${body.toString()}`);
}

export class Message {
  telegramMessageBody: TelegramBodyDto;
  constructor(telegramMessageBody: TelegramBodyDto) {
    this.telegramMessageBody = telegramMessageBody;
  }

  public sendMessage(text: string): string {
    const { id } = this.telegramMessageBody.message.chat;
    return `sendMessage?chat_id=${id}&text=${text}`;
  }
}
