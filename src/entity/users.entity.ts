import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Role } from './role.entity'

export type UserRoleType = "admin" | "editor" | "ghost"
@Entity('user')
export class Users {
	@PrimaryGeneratedColumn("uuid")
	userId: string;
	
	@Column()
	username: string;
	
	@Column()
	password: string;
	
	@Column()
	fullName: string;
	
	@Column()
	status: boolean = true;
	
	// @Column({
	// 	type: "enum",
	// 	enum: ["admin", "editor", "ghost"],
	// 	default: "ghost"
	// })
	// roles: UserRoleType;
	
	@OneToOne(type => Role,role => role.users)
	@JoinColumn()
	roles: Role;
	
	@Column("simple-array")
	power: string[] = [];
}