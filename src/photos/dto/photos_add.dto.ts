import { ApiProperty,ApiHideProperty } from '@nestjs/swagger';
import { ValidateIf, MaxLength } from 'class-validator'

export class PhotosAddDto {
	@ApiProperty({
		description: '封面url'
	})
	cover: string;
		
	@ApiProperty({
		description: '相册名称(max:20)'
	})
	@MaxLength(20,{
		message:'最长20字符'
	})
	name: string
}
