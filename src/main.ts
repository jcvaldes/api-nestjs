import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('API Customers')
  .setDescription("API para gestionar clientes")
  .setVersion('1.0')
  .addTag('customers')
  .build()
  
  const documet = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api/docs', app, documet, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    }
  })
  app.useGlobalFilters(new AllExceptionFilter)
  await app.listen(3000);
}
bootstrap();
