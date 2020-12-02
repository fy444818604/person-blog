import { ClassSerializerInterceptor } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipe/validation.pipe'
import { TransformInterceptor } from './common/interceptor/transform.interceptor'
import { HttpExceptionFilter } from './common/exception/bad-request.filter';
import { QueryFailedFilter } from './common/exception/query-failed.filter';
import { JwtStrategy } from './auth/jwt.strategy'
import { ExpressAdapter,NestExpressApplication } from '@nestjs/platform-express'
import * as fs from 'fs';
import * as http from "http";
import * as https from "https";
import * as helmet from 'helmet';
// import * as RateLimit from 'express-rate-limit';
import * as morgan from 'morgan';
// import * as compression from 'compression';
import { join } from 'path';
import { WsAdapter } from '@nestjs/platform-ws';
import { ConfigService } from '@nestjs/config'
import { WINSTON_MODULE_NEST_PROVIDER,WinstonModule } from 'nest-winston';
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
	  AppModule, 
	  // new FastifyAdapter(),
	  // {logger: WinstonModule.createLogger({})}
	  new ExpressAdapter()
  );
	const configService = app.get(ConfigService);
  // app.setGlobalPrefix('api');
  // 全局使用winston
  const nestWinston = app.get(WINSTON_MODULE_NEST_PROVIDER)
  app.useLogger(nestWinston)
  // 捕获全局错误
	const reflector = app.get(Reflector);
  app.useGlobalFilters(
		new HttpExceptionFilter(reflector),
		new QueryFailedFilter(reflector),
	)
  
  app.enableCors();
	app.use(helmet());
  app.use(morgan('combined'));
	// app.use(compression());
	// app.use(
	// 	RateLimit({
	// 			windowMs: 15 * 60 * 1000, // 15 minutes
	// 			max: 10000, // limit each IP to 100 requests per windowMs
	// 	}),
	// );
  
  const options = new DocumentBuilder()
      .setTitle('测试接口')
      .setDescription('这是一个测试滴API文档')
      .setVersion('2.0')
      .addTag('接口')
	  .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, options,{
		ignoreGlobalPrefix: false
  });
  SwaggerModule.setup('api', app, document);
  
  // const secondOptions = new DocumentBuilder()
  //     .setTitle('Cats example')
  //     .setDescription('The cats API description')
  //     .setVersion('1.0')
  //     .addTag('cats')
  //     .build();
  
  //   const catDocument = SwaggerModule.createDocument(app, secondOptions, {
  //     include: [CatsModule]
  //   });
  //   SwaggerModule.setup('api/cats', app, catDocument);
  
  app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new TransformInterceptor());
  
  app.useWebSocketAdapter(new WsAdapter(app));
	
  await app.listen(configService.get<number>('server.port'));
}
bootstrap();
