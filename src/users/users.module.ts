import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entity/users.entity'
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports:[
		TypeOrmModule.forFeature([Users])
	],
  controllers: [UsersController]
})
export class UsersModule {}
