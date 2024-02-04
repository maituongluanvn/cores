import { TelegramBodyDto, MessageEntityType } from '@cores/definition';

export function getBotCommand(body: TelegramBodyDto): string | Error {
  if (body.message.entities.type === MessageEntityType.bot_command) {
    return body.message.text;
  }
  return new Error(`It's not bot command`);
}
