import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { Injectable } from '@nestjs/common';

// @Injectable()
export const UserInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
		// constructor(
		// 	private readonly authService: AuthService
		// ) {}
		
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers.cookie.split('Admin-Token=')[1];
		// const info = await this.authService.getUersInfo(token)
		console.log(request.user)
		
		return '111'
    // return data ? user && user[data] : user;
  },
);