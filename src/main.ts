import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('API Customers')
    .setDescription('API para gestionar clientes')
    .setVersion('1.0')
    .addTag('customers')
    .build();

  const documet = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, documet, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });
  app.useGlobalFilters(new AllExceptionFilter());
  // Prevenimos muchisimos ataques
  // this
  app.use(helmet());
  // es equivalente a esto
  // ...is equivalent to this:
  // app.use(helmet.contentSecurityPolicy());
  // app.use(helmet.dnsPrefetchControl());
  // app.use(helmet.expectCt());
  // app.use(helmet.frameguard());
  // app.use(helmet.hidePoweredBy());
  // app.use(helmet.hsts());
  // app.use(helmet.ieNoOpen());
  // app.use(helmet.noSniff());
  // app.use(helmet.permittedCrossDomainPolicies());
  // app.use(helmet.referrerPolicy());
  // app.use(helmet.xssFilter());
  await app.listen(3000);
}
bootstrap();
