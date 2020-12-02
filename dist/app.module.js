"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_module_1 = require("./auth/auth.module");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const core_1 = require("@nestjs/core");
const validation_pipe_1 = require("./common/pipe/validation.pipe");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("@nestjs/config");
const config_2 = require("@nestjs/config");
const database_config_1 = require("./config/database.config");
const server_config_1 = require("./config/server.config");
const nest_winston_1 = require("nest-winston");
const note_module_1 = require("./note/note.module");
const winston = require("winston");
const DailyRotateFile = require('winston-daily-rotate-file');
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .exclude()
            .forRoutes();
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'public'),
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default, server_config_1.default]
            }),
            nest_winston_1.WinstonModule.forRoot({
                format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
                    }),
                    new DailyRotateFile({
                        dirname: './public/log',
                        filename: '%DATE%.log',
                        maxSize: '10m',
                    })
                ],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (config) => ({
                    type: 'mysql',
                    host: config.get('database.host'),
                    port: config.get('database.port'),
                    database: config.get('database.database'),
                    username: config.get('database.username'),
                    logging: 'all',
                    logger: "file",
                    password: config.get('database.password'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
                inject: [config_2.ConfigService],
            }),
            auth_module_1.AuthModule,
            note_module_1.NoteModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useClass: validation_pipe_1.ValidationPipe
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map