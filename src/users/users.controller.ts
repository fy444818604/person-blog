import { Controller, Post, Body, Get, Query,forwardRef, Inject, Param, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { UsersDto } from './dto/users.dto'
import { SearchUsersDto } from './dto/search.users.dto'
import { MenuDto } from './dto/menu.dto'
import { Users } from '../entity/users.entity'
import { Role } from '../entity/role.entity'
import { RoleMenu } from '../entity/role_menu.entity'
import { CreateRoleDto } from './dto/create.role.dto'

@ApiTags('用户相关')
@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService:UsersService,
	){}
	
	@ApiOperation({
		summary:'增加一个用户'
	})
	@Post('add')
	async usersAdd(@Body() usersDto:UsersDto): Promise<Users> {
		return this.usersService.usersAdd(usersDto)
	}
	
	@ApiOperation({
		summary:'查询用户'
	})
	@Get('search')
	async userFind(@Query() searchUsersDto:SearchUsersDto): Promise<Users> {
		return this.usersService.findUser(searchUsersDto)
	}
	
	@ApiOperation({
		summary:'添加菜单'
	})
	@Post('role/menu')
	async menuAdd(@Body() menuDto:MenuDto[]): Promise<any> {
		await this.usersService.menuAdd(menuDto)
	}
	
	@ApiOperation({
		summary:'获取权限菜单'
	})
	@Get('role/menus')
	async menuSearch(): Promise<RoleMenu[]> {
		return await this.usersService.menuSearch()
	}
	
	@ApiOperation({
		summary:'获取角色菜单'
	})
	@Get('role/menuFind/:id')
	async getMenu(@Param('id') id:string): Promise<Role> {
		return await this.usersService.getMenu(id)
	}
	
	@ApiOperation({
		summary:'获取所有角色'
	})
	@Get('role/roles')
	async getRoles(): Promise<Role[]> {
		return await this.usersService.getRoles()
	}
		
	@ApiOperation({
		summary:'创建角色'
	})
	@Post('role/create')
	async createRole(@Body() createRoleDto:CreateRoleDto): Promise<Role> {
		if(createRoleDto.id == "") delete createRoleDto.id
		return await this.usersService.createRole(createRoleDto)
	}
}
