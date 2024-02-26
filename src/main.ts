import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(3000);
}
bootstrap();

// 1 - Usuários:
// * Cadastro de usuários (Crud)
// * Login
// * Cadastro de eventos e atividades feitos apenas por usuários do tipo Admin
// * Usuário comum pode se inscrever em um evento contanto que ainda tenha vagas

// 2 - Eventos:
// * Cadastro de eventos (Crud)

// 3 - Atividades:
// * Cadastro de atividades (Crud)
// * Status sendo alterado a partir da quantidade máxima de inscritos alcançada

// 4 - Testes de exploração:
// * Feitos tendo criado usuários de diferentes tipos, além de verificar na base de dados se o status da atividade era realmente alterado
