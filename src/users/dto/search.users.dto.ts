import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SearchUsersDto {
	
	@ApiProperty({ required: false })
	userId: string;
	
	@ApiProperty({ required: false })
	username: string;
	
}