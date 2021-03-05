import { ApiProperty } from '@nestjs/swagger';
import { NoteImage } from '../../entity/note.image.entity';
import { Label } from '../../entity/label.entity'
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateNoteDto {
	@ApiProperty({
		description: '所属标签Id'
	})
	labelId: string;
	
	@ApiProperty({
		description: '文章富文本'
	})
	content: string;
	
	@ApiProperty({
		description: '文章标题(非空,max:20)'
	})
	@IsNotEmpty()
	@MaxLength(20, {
		message: "最长不得超过20"
	})
	title: string;
	
	@ApiProperty({
		description: '文章插图(数组)'
	})
	photos: NoteImage[]
	
}