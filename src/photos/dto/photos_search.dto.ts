import { ApiProperty } from '@nestjs/swagger';
import { ValidateIf } from 'class-validator'

export class SearchPhotosDto {
	@ApiProperty({ required: false })
	@ValidateIf(obj => {
		return obj && typeof obj.user !== 'undefined';
	})
	user: string = 'admin';
}
