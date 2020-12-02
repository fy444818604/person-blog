import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
	@ApiProperty()
	type: string;
	
	@ApiProperty()
	title: string;
}