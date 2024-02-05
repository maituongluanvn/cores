import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { TelegramInstance } from '@common/axios';
// import { Webhook, WebhookSchema } from '@schemas/Webhook.schema';
// import { MongooseModule } from '@nestjs/mongoose';
// @Module({
//   imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }])],
//   controllers: [WebhookController],
// })

@Module({
  // imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }])],
  imports: [],
  controllers: [WebhookController],
  providers: [WebhookService, TelegramInstance],
})
export default class WebhookModule {}
