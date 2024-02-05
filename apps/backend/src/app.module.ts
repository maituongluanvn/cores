import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import IncomesModule from './modules/incomes/incomes.module';
import OutcomesModule from './modules/outcomes/outcomes.module';
import TransactionModule from './modules/transaction/transaction.module';
import WebhookModule from './modules/webhook/webhook.module';
import LoggerMiddleware from '@middlewares/logger.middleware';
import { TelegramInstance } from '@common/axios';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    MongooseModule.forRoot(process.env.mongo_uri),
    IncomesModule,
    OutcomesModule,
    TransactionModule,
    WebhookModule,
    // TelegramInstance,
  ],
  // controllers: [AppController],
  // providers: [TelegramInstance],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
