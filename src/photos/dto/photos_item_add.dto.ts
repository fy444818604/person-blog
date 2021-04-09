import { ApiProperty,ApiHideProperty } from '@nestjs/swagger';
import { ValidateIf, MaxLength } from 'class-validator'
import { Photos } from '../../entity/photos.entity'

export class PhotosItemAddDto {
	@ApiProperty({
		description: '照片url'
	})
	url: string;
		
	@ApiProperty({
		description: '所属相册Id'
	})
	id: string
	
	@ApiProperty({
		description: '相册封面'
	})
	cover: string
	
	@ApiProperty({
		description: '相册相片列表'
	})
	photos: Photos[]
}
