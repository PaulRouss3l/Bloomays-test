import { NestFactory } from '@nestjs/core';
import { BloomerModule } from './bloomers/bloomers.module';
import dotenv from "dotenv";

async function bootstrap() {
  const app = await NestFactory.create(BloomerModule);
  app.enableCors();
  await app.listen(3000);
}
dotenv.config();
bootstrap();
