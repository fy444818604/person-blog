import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateComponentDto {
	@ApiProperty({ type: 'string' })
	@IsNotEmpty()
	title: string;
	
	@ApiProperty({ type: 'string' })
	@IsNotEmpty()
	describe: string;
	
	@ApiProperty({ type: 'string' })
	@IsNotEmpty()
	url: string;
}