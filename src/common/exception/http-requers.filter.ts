import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// import { Logger } from 'winston'

/**
 * @class HttpExceptionFilter
 * @classdesc 拦截全局抛出的所有异常，同时任何错误将在这里被规范化输出 THttpErrorResponse
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	// constructor(private readonly logger: Logger) {}
	constructor(public reflector:Reflector) {}
	
	
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const message = exception.message;
    Logger.log('错误提示', message);
    const errorResponse = {
      data: [], // 获取全部的错误信息
      message: '请求失败',
      code: 500, // 自定义code
      url: request.originalUrl, // 错误的url地址
    };
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // 设置返回的状态码、请求头、发送错误信息
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
