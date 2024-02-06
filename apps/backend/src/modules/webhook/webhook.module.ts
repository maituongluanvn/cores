import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
// import { TelegramInstance } from '@common/axios';
import { ConfigModule } from '@nestjs/config';
// import { Webhook, WebhookSchema } from '@schemas/Webhook.schema';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }])],
  imports: [ConfigModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export default class WebhookModule {}
