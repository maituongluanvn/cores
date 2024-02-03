import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

import env from '@config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('backend/api/v1');
  app.useGlobalPipes(new ValidationPipe());
  if (env.isDevelopment) {
    const config = new DocumentBuilder()
      .setTitle('Backend API')
      .setDescription('Backend API')
      .setVersion(process.env.npm_package_version)
      // .addTag('cats')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('backend/api/swagger', app, document);
  }

  await app.listen(8888, () => {
    Logger.log('========= Listen at port 8888');
  });
}
bootstrap();
