import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

// @Injectable()
// export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
//     return next.handle().pipe(map(data => ({ "statusCode": 200,data:data == undefined?[]:data,"msg":null })));
//   }
// }
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ 
			"statusCode": data.statusCode || 200,
			data:data.data != undefined?data.data:data == undefined?[]:data,
			"msg":data.msg || null }
		)));
  }
}