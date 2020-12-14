import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { NoteImage } from './note.image.entity'
import { Label } from './label.entity'

@Entity('note')
export class Note {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;
	
	@CreateDateColumn()
	createTime: Date;	
	
	@ManyToOne(type => Label, label => label.notes)
	label: Label;
	
	@OneToMany(type => NoteImage, noteImage => noteImage.note)
	photos: NoteImage[]
}
