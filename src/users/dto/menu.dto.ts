import { ApiProperty } from '@nestjs/swagger';

export class MenuDto {
	@ApiProperty()
	name: string;
	
	@ApiProperty()
	path: string;
	
}