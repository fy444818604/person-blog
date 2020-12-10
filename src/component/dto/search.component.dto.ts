import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SearchComponentDto {
	@ApiProperty({ type: 'number' })
	@IsNotEmpty()
	current: number;
	
	@ApiProperty({ required: false, default: 10, type: 'number' })
	@IsNotEmpty()
	readonly pageSize: number = 10;
}