// import {
//     CallHandler,
//     ExecutionContext,
//     Injectable,
//     NestInterceptor,
// } from '@nestjs/common';
// import { Observable } from 'rxjs';

// import { AuthService } from '../../auth/auth.service';
// import { Users } from '../../entity/users.entity';

// @Injectable()
// export class AuthUserInterceptor implements NestInterceptor {
//     intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//         const request = context.switchToHttp().getRequest();

//         const user = <Users>request.user;
//         AuthService.setAuthUser(user);

//         return next.handle();
//     }
// }