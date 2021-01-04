import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Role } from './role.entity'

@Entity('role_menu')
export class RoleMenu {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	name: string;
	
	@Column()
	path: string;
	
	@ManyToMany(type => Role, role => role.roleMenus)
	roles: Role[]
	
}