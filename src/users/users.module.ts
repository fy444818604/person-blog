import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entity/users.entity'
import { RoleMenu } from '../entity/role_menu.entity'
import { UsersController } from './users.controller';
import { Role } from '../entity/role.entity'

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports:[
		TypeOrmModule.forFeature([Users]),
		TypeOrmModule.forFeature([RoleMenu]),
		TypeOrmModule.forFeature([Role]),
	],
  controllers: [UsersController]
})
export class UsersModule {}
