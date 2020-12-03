import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
	
	@Column({
		type: "enum",
		enum: ["admin", "editor", "ghost"],
		default: "ghost"
	})
	roles: UserRoleType;
	
	@Column("simple-array")
	power: string[];
}