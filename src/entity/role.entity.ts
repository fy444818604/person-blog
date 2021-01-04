import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne } from 'typeorm';
import { RoleMenu } from './role_menu.entity'
import { Users } from './users.entity'

@Entity('role')
export class Role {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	name: string;
	
	@Column()
	description: string;
	
	@ManyToMany(type => RoleMenu,roleMenu => roleMenu.roles)
	@JoinTable()
	roleMenus:RoleMenu[]
	
	@OneToOne(type => Users,users => users.roles)
	users:Users
}