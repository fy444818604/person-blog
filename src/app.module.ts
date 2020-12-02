import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { APP_PIPE, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ValidationPipe } from './common/pipe/validation.pipe'
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import DatabaseConfig from './config/database.config'
import ServerConfig from './config/server.config'
import { utilities as nestWinstonModuleUtilities,WinstonModule } from 'nest-winston'
import { NoteModule } from './note/note.module';
import * as winston from 'winston';
const DailyRotateFile = require('winston-daily-rotate-file');

@Module({
  imports: [
	  ScheduleModule.forRoot(),
	  ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'public'),
	  }),
	  ConfigModule.forRoot({
			isGlobal: true,
			load:[DatabaseConfig,ServerConfig]
		}),
	  WinstonModule.forRoot({
			format: winston.format.combine(
				winston.format.timestamp(),
				nestWinstonModuleUtilities.format.nestLike(),
			),
			transports: [
				new winston.transports.Console({
					format: winston.format.combine(
						winston.format.timestamp(),
						nestWinstonModuleUtilities.format.nestLike(),
					),
				}),
				new DailyRotateFile({
					dirname:'./public/log',
					filename: '%DATE%.log',
					maxSize: '10m',
				})
			],
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (config: ConfigService) => ({
				type:'mysql',
				host:config.get('database.host'),
				port:config.get('database.port'),
				database:config.get('database.database'),
				username:config.get('database.username'),
				// password:'root',
				logging: 'all',
				logger: "file",
				password:config.get('database.password'),
				// password:'Smile_5201314',
				entities:[__dirname + '/**/*.entity{.ts,.js}'],
				// autoLoadEntities: true,
				synchronize:true,
			}),
			inject: [ConfigService],
		}),
	  AuthModule,
	  NoteModule,
  ],
  controllers: [AppController],
  providers: [
	  AppService,
	  {
		provide: APP_PIPE,
		useClass: ValidationPipe
	  },
  ],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer){
		consumer
			.apply(LoggerMiddleware)
			.exclude(
			    // { path: 'cats', method: RequestMethod.GET },
			    // { path: 'cats', method: RequestMethod.POST },
			    // 'cats*',
			  )
			.forRoutes();
	}
}
