import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
// import { Webhook, WebhookSchema } from '@schemas/Webhook.schema';
// import { MongooseModule } from '@nestjs/mongoose';
// @Module({
//   imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }])],
//   controllers: [WebhookController],
// })
// export default class CatsModule {}

@Module({
  // imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }])],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export default class WebhookModule {}
