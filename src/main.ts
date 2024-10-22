import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // evita campos extras en el Payload al crear
      //forbidNonWhitelisted: true, // Lanzar error si existen datos prohibidos
      //disableErrorMessages: true, // Desabilitar mensajes de error (producción)
    }),
  );

  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('PedidosAPI')
    .setDescription('Documentación para la API de pedidos')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('documentacion', app, document);

  await app.listen(3000);
}
bootstrap();
