import axios, { AxiosInstance } from 'axios';

export const TelegramBotInstance = ((): AxiosInstance =>
  axios.create({
    baseURL: `https://api.telegram.org/bot${process.env.telegramBotToken}`,
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
  }))();
