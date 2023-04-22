import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT');
  const appUrl = config.get<string>('LOCAL_URL');

  await app.listen(port, (): void => {
    logger.log(`Server is running on ${appUrl}:${port}`);
  });
}
bootstrap();
