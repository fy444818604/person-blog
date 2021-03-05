import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Role } from './role.entity'

@Entity('role_menu')
export class RoleMenu {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column({
		comment: '菜单名称'
	})
	name: string;
	
	@Column({
		comment: '菜单路由'
	})
	path: string;
	
	@ManyToMany(type => Role, role => role.roleMenus)
	roles: Role[]
	
}