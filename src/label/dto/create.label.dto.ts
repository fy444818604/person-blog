import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Note } from '../../entity/note.entity'

export class CreateLabelDto {
	@ApiProperty({ type: 'string' })
	@IsNotEmpty()
	name: string;
	
	@ApiProperty({ type: 'string' })
	@IsNotEmpty()
	pId: string;
	
	// @ApiProperty()
	// notes:Note[]
}