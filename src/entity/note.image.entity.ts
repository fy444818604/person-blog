import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Note } from './note.entity'

@Entity('note_image')
export class NoteImage {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column({
		comment: '笔记插图地址'
	})
	url: string;
	
	@ManyToOne(type => Note, note => note.photos, {
		onDelete: "CASCADE"
	})
	note: Note;
}