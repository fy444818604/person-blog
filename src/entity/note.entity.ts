import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { NoteImage } from './note.image.entity'
import { Label } from './label.entity'

@Entity('note_main')
export class Note {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
    comment: '标题',
  })
	title: string;
	
	@CreateDateColumn()
	createTime: Date;	
	
	@Column()
	noteType: string;
	
	@Column({
		type:'longtext',
		comment: '笔记富文本'
	})
	content: string;
	
	@ManyToOne(type => Label, label => label.notes)
	@JoinColumn()
	label: Label;
	
	@OneToMany(type => NoteImage, noteImage => noteImage.note)
	photos: NoteImage[]
	
}
