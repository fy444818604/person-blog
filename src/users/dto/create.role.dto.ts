import { ApiProperty } from '@nestjs/swagger';
import { RoleMenu } from '../../entity/role_menu.entity'

export class CreateRoleDto {
	@ApiProperty()
	id: string;
	
	@ApiProperty()
	name: string;
	
	@ApiProperty()
	description: string;
	
	@ApiProperty()
	roleMenus:RoleMenu[]
}