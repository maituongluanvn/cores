import axios, { AxiosInstance } from 'axios';
import env from '@config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramInstance {
  constructor() {}

  init(): AxiosInstance {
    return axios.create({
      baseURL: `https://api.telegram.org/bot${env.telegramBotToken}`,
      timeout: 1000,
      // headers: { 'X-Custom-Header': 'foobar' },
    });
  }
}
