import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

let jwt = require("jsonwebtoken");

export const UserInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
		
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['x-token']
		let user = jwt.decode(token)
		
		return data ? user && user[data] : user;
  },
);