import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Users } from '../entity/users.entity'
import { RoleMenu } from '../entity/role_menu.entity'
import { UsersDto } from './dto/users.dto'
import { SearchUsersDto } from './dto/search.users.dto'
import { MenuDto } from './dto/menu.dto'
import { Role } from '../entity/role.entity'

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
	  return this.users.save(usersDto)
  }
	
	async findUser(searchUsersDto:SearchUsersDto): Promise<Users> {
		return await this.users.findOne({
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
		return await this.roles.find()
	}
}
