import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity'

@Entity('note_watch_record')
export class NoteImage {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@CreateDateColumn()
	createTime: Date;
	
	@OneToOne(type => Users)
	@JoinColumn()
	user: Users
}