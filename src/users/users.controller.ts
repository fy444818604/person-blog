import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { UsersDto } from './dto/users.dto'
import { Users } from './users.entity'

@ApiTags('用户相关')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService:UsersService){}
	
	@Post('add')
	async usersAdd(@Body() usersDto:UsersDto): Promise<Users> {
		return this.usersService.usersAdd(usersDto)
	}
	
}
