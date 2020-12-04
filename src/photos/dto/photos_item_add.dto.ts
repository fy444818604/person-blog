import { ApiProperty,ApiHideProperty } from '@nestjs/swagger';
import { ValidateIf, MaxLength } from 'class-validator'

export class PhotosItemAddDto {
	@ApiProperty({
		description: '照片url'
	})
	url: string;
		
	@ApiProperty({
		description: '所属相册Id'
	})
	photoId: string
}
