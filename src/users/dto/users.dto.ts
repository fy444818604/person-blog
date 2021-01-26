import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UsersDto {
	
	@ApiProperty()
	userId: string;
	
	@ApiProperty()
	username: string;
	
	@ApiProperty()
	password: string;
	
	@ApiProperty()
	fullName: string;
	
	@ApiProperty()
	roles: string;
	
	@ApiProperty()
	status: boolean = true;
	
	// @ApiProperty()
	// power: string[] = [];
}