import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity'
import { Note } from './note.entity'

@Entity('note_watch_record')
export class NoteImage {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@CreateDateColumn()
	createTime: Date;
	
	@OneToOne(type => Users)
	@JoinColumn()
	user: Users;
	
	@OneToOne(type => Note)
	@JoinColumn()
	note: Note;
}