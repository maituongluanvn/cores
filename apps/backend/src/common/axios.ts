import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// @Injectable()
export class TelegramInstance {
  // config: string;
  constructor(private configService: ConfigService) {
    // console.log('🚀 ~ TelegramInstance ~ constructor ~ token:', token);
    // this.config = token;
  }

  init(): AxiosInstance {
    return axios.create({
      baseURL: `https://api.telegram.org/bot${this.configService.get('telegramBotToken')}`,
      timeout: 1000,
      // headers: { 'X-Custom-Header': 'foobar' },
    });
  }
}

// export const telegramInstance = Object.freeze(new TelegramInstance(ConfigService).init());

// function abc(ins: any) {
//   const axiosInstance = axios.create({
//     baseURL: `https://api.telegram.org/bot${env.telegramBotToken}`,
//     timeout: 1000,
//     // headers: { 'X-Custom-Header': 'foobar' },
//   });
//   ins();
// }
