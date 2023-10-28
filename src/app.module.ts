import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import IncomesModule from './modules/incomes/incomes.module';
import OutcomesModule from './modules/outcomes/outcomes.module';

// import env from '@src/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    MongooseModule.forRoot(process.env.mongo_uri),
    IncomesModule,
    OutcomesModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
