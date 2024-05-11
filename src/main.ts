import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://morgana-english-front.onrender.com', 'localhost:3000'],
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();
