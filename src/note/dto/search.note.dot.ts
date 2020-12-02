import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SearchNoteDto {
	@ApiProperty({ required: false })
	@IsString()
	type: string;
	
	@ApiProperty({ required: false })
	@IsString()
	title: string;
	
	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	current: number;
	
	@ApiProperty({ required: false })
	@IsNumber()
	readonly pageSize = 10;
}