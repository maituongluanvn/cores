import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export enum envEnum {
  mongo_uri = 'mongo_uri',
  telegramBotToken = 'telegramBotToken',
}

@Injectable()
class Environment {
  config: ConfigService<Record<string, unknown>>;
  constructor() {
    this.config = new ConfigService();
  }

  public get isProduction(): boolean {
    return this.get('NODE_ENV', 'development') === 'production';
  }

  public get isDevelopment(): boolean {
    return this.get('NODE_ENV', 'development') === 'development';
  }

  public get mongoURI(): string {
    return this.get(envEnum.mongo_uri);
  }

  public get telegramBotToken(): string {
    return this.get(envEnum.telegramBotToken);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private get(key: string, defaultValue?: string) {
    const value = this.config.get(key) || defaultValue;
    if (value) {
      return value;
    }
    Logger.error(`Missing env with key ${key}`);
    throw new BadRequestException('Missing env');
  }
}

const env = Object.freeze(new Environment());

export default env;
