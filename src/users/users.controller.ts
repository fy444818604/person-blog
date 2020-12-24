import { Controller, Post, Body, Get, Query,forwardRef, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { UsersDto } from './dto/users.dto'
import { SearchUsersDto } from './dto/search.users.dto'
import { Users } from '../entity/users.entity'

@ApiTags('用户相关')
@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService:UsersService,
	){}
	
	@Post('add')
	async usersAdd(@Body() usersDto:UsersDto): Promise<Users> {
		return this.usersService.usersAdd(usersDto)
	}
	
	@Get('search')
	async userFind(@Query() searchUsersDto:SearchUsersDto): Promise<Users> {
		return this.usersService.findUser(searchUsersDto)
	}
	
	
}
