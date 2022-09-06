import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('SERVER_PORT');

  const config = new DocumentBuilder()
    .setTitle('Things flow')
    .setDescription('Things flow API')
    .setVersion('1.0.0')
    .addTag('things flow')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  Logger.log(`Application running on port ${PORT}, http://localhost:${PORT}`);
  Logger.log(`Go to API Docs : http://localhost:${PORT}/docs`);
}
bootstrap();
