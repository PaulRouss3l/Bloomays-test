import { NestFactory } from '@nestjs/core';
import { BloomerModule } from './bloomers/bloomers.module';

async function bootstrap() {
  const app = await NestFactory.create(BloomerModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
