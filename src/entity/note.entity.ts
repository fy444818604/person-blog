import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { NoteImage } from './note.image.entity'
import { Label } from './label.entity'

@Entity('note')
export class Note {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@OneToOne(type => Label)
	@JoinColumn()
	type: Label;
	
	@Column()
	title: string;
	
	@CreateDateColumn()
	createTime: Date;
	
	@OneToMany(type => NoteImage, noteImage => noteImage.note)
	photos: NoteImage[]
}
