"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./common/pipe/validation.pipe");
const transform_interceptor_1 = require("./common/interceptor/transform.interceptor");
const bad_request_filter_1 = require("./common/exception/bad-request.filter");
const query_failed_filter_1 = require("./common/exception/query-failed.filter");
const platform_express_1 = require("@nestjs/platform-express");
const helmet = require("helmet");
const morgan = require("morgan");
const platform_ws_1 = require("@nestjs/platform-ws");
const config_1 = require("@nestjs/config");
const nest_winston_1 = require("nest-winston");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter());
    const configService = app.get(config_1.ConfigService);
    const nestWinston = app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER);
    app.useLogger(nestWinston);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalFilters(new bad_request_filter_1.HttpExceptionFilter(reflector), new query_failed_filter_1.QueryFailedFilter(reflector));
    app.enableCors();
    app.use(helmet());
    app.use(morgan('combined'));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('测试接口')
        .setDescription('这是一个测试滴API文档')
        .setVersion('2.0')
        .addTag('接口')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        ignoreGlobalPrefix: false
    });
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useWebSocketAdapter(new platform_ws_1.WsAdapter(app));
    await app.listen(configService.get('server.port'));
}
bootstrap();
//# sourceMappingURL=main.js.map