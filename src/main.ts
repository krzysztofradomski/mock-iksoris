import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Iksoris mock API')
    .setDescription(
      'This mocks the iksoris. Use `/iksoris` as you would use `https://bilety.teatrwybrzeze.pl/export.html?json=true`. DB is in memory only, but allows all crud operations.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
