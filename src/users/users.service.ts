import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Users } from '../entity/users.entity'
import { RoleMenu } from '../entity/role_menu.entity'
import { UsersDto } from './dto/users.dto'
import { SearchUsersDto } from './dto/search.users.dto'
import { MenuDto } from './dto/menu.dto'
import { Role } from '../entity/role.entity'
import { CreateRoleDto } from './dto/create.role.dto'

// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
		private readonly users: Repository<Users>,
		@InjectRepository(RoleMenu)
		private readonly roleMenu: Repository<RoleMenu>,
		@InjectRepository(Role)
		private readonly roles: Repository<Role>,
  ) {}
  
  async findOne(username: string): Promise<Users | undefined> {
    return this.users.findOne({
			where:{
				username:username
			},
			relations:["roles"]
		});
  }
  
  async usersAdd(usersDto:UsersDto): Promise<Users> {
		let user;
		if(usersDto.userId == ''){
		  user = new Users
		}else {
			user = await this.users.findOne(usersDto.userId)
		}
		if(usersDto.status) {
			user.status = usersDto.status
			console.log(user)
			return this.users.save(user)
		}
		user.username = usersDto.username
		user.fullName = usersDto.fullName
		if(usersDto.roles != ''){
			user.roles = await this.roles.findOne(usersDto.roles)
		} 
		
	  return this.users.save(user)
  }
	
	async findUser(searchUsersDto:SearchUsersDto): Promise<Users | [Users[],number]> {
		if(searchUsersDto.current){
			return await this.users.findAndCount({
				relations:["roles"],
				take: searchUsersDto.pageSize,
				skip: (searchUsersDto.current-1)*searchUsersDto.pageSize,
				cache: true
			})
		}
		return await this.users.findOne({
			relations:["roles"],
			where:{
				userId: searchUsersDto.userId || Like("%"),
				username: searchUsersDto.username || Like("%")
			}
		})
	}
	
	async menuAdd(menuDto:MenuDto[]): Promise<any> {
		return await this.roleMenu.save(menuDto)
	}
	
	async getMenu(id:string): Promise<Role> {
		return await this.roles.findOne(id,{
			relations:["roleMenus"]
		})
	}
	
	async menuSearch(): Promise<RoleMenu[]> {
		return await this.roleMenu.find()
	}
	
	async getRoles(): Promise<Role[]> {
		return await this.roles.find({
			relations:["roleMenus"]
		})
	}
	
	async createRole(createRoleDto:CreateRoleDto): Promise<Role> {
		let role;
		if(createRoleDto.id) role = await this.roles.findOne(createRoleDto.id)
		else role = new Role()
		role.name = createRoleDto.name
		role.description = createRoleDto.description
		let ids = []
		createRoleDto.roleMenus.map(v => {
			ids.push(v.id)
		})
		role.roleMenus = await this.getRolesByIds(ids)
		return await this.roles.save(role)
	}
	
	async getRolesByIds(ids){ // 用在新增使用者时候要回传Role[]
		return await this.roleMenu.findByIds(ids);
	}
}
