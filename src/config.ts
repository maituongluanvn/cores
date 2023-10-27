import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export enum envEnum {
  mongo_uri = 'mongo_uri',
}

@Injectable()
export class Environemnt {
  config: ConfigService<Record<string, unknown>>;
  constructor() {
    this.config = new ConfigService();
  }

  public isProduction() {
    return this.get('NODE_ENV', 'development') === 'production';
  }

  public isDevelopment() {
    return this.get('NODE_ENV', 'development') === 'development';
  }

  public mongoURI() {
    return this.get(envEnum.mongo_uri);
  }

  private get(key: string, defaultValue?: string) {
    const value = this.config.get(key) || defaultValue;
    if (value) {
      return value;
    }
    Logger.error(`Missing env with key ${key}`);
    throw new BadRequestException('Missing env');
  }
}

const env = Object.freeze(new Environemnt());

export default env;
