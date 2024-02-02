import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import IncomesModule from './modules/incomes/incomes.module';
import OutcomesModule from './modules/outcomes/outcomes.module';
import TransactionModule from './modules/transaction/transaction.module';
import LoggerMiddleware from '@middlewares/logger.middleware';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    MongooseModule.forRoot(process.env.mongo_uri),
    IncomesModule,
    OutcomesModule,
    TransactionModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
