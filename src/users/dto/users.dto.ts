import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UsersDto {
	
	@ApiProperty()
	username: string;
	
	@ApiProperty()
	password: string;
	
	@ApiProperty()
	fullName: string;
	
	@ApiProperty()
	power: string[] = [];
}