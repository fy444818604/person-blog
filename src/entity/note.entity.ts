import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { NoteImage } from './note.image.entity'

@Entity('note')
export class Note {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	type: string;
	
	@Column()
	title: string;
	
	@CreateDateColumn()
	createTime: Date;
	
	@OneToMany(type => NoteImage, noteImage => noteImage.note)
	photos: NoteImage[]
}
