import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { exceptionFactory } from './exception-factory/exceptionFactory';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: exceptionFactory,
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
