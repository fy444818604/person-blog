import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Note } from './note.entity'

@Entity('note_image')
export class NoteImage {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	url: string;
	
	@ManyToOne(type => Note, note => note.photos)
	note: Note;
}