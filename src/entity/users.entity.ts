import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role.entity'

export type UserRoleType = "admin" | "editor" | "ghost"
@Entity('user')
export class Users {
	@PrimaryGeneratedColumn("uuid")
	userId: string;
	
	@Column({
		comment:'账号'
	})
	username: string;
	
	@Column({
		default:'123456',
		comment:'用户密码'
	})
	password: string;
	
	@Column({
		default:'',
		comment:'用户昵称'
	})
	fullName: string;
	
	@Column({
		default:true,
		comment:'账号状态(1:启用中,2:停用中)'
	})
	status: boolean;
	
	// @Column({
	// 	type: "enum",
	// 	enum: ["admin", "editor", "ghost"],
	// 	default: "ghost"
	// })
	// roles: UserRoleType;
	
	@ManyToOne(type => Role,role => role.users)
	@JoinColumn()
	roles: Role;
	
	// @Column({
	// 	type:"simple-array",
	// 	comment:'附加权限',
	// 	nullable:true
	// })
	// power: string[] = [];
}