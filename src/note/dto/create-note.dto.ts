import { ApiProperty } from '@nestjs/swagger';
import { NoteImage } from '../../entity/note.image.entity';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateNoteDto {
	@ApiProperty()
	@IsNotEmpty()
	type: string;
	
	@ApiProperty()
	@IsNotEmpty()
	@MaxLength(20, {
		message: "最长不得超过20"
	})
	title: string;
	
	@ApiProperty()
	photos: NoteImage[]
}