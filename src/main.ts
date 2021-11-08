import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// config
import { ManagerExceptionFilter } from './config/exceptions/manager-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // Register as global filter
  app.useGlobalFilters(new ManagerExceptionFilter());
  await app.listen(process.env.PORT || '8001');
}
bootstrap();
