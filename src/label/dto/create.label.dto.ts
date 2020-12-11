import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateLabelDto {
	@ApiProperty({ type: 'string' })
	@IsNotEmpty()
	name: string;
	
	@ApiProperty({ type: 'string' })
	@IsNotEmpty()
	pId: string;
	
}