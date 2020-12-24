import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Users } from '../entity/users.entity'
import { UsersDto } from './dto/users.dto'
import { SearchUsersDto } from './dto/search.users.dto'

// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
		private readonly users: Repository<Users>
  ) {}
  
  async findOne(username: string): Promise<Users | undefined> {
    return this.users.findOne({username:username});
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
}
