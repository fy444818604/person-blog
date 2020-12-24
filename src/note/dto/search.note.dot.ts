import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDefined, ValidateIf } from 'class-validator';
import { Label } from '../../entity/label.entity'

export class SearchNoteDto {
	@ApiProperty({ required: false })
	@ValidateIf(obj => {
		return obj && typeof obj.type !== 'undefined';
	})
	@IsString() 
	labelId: string;
	
	@ApiProperty({ required: false })
	@ValidateIf(obj => {
		return obj && typeof obj.title !== 'undefined';
	})
	@IsString()
	title: string;
	
	@ApiProperty({ type: 'number' })
	@IsNotEmpty()
	current: number;
	
	@ApiProperty({ required: false, default: 10, type: 'number' })
	@IsNotEmpty()
	readonly pageSize: number = 10;
}