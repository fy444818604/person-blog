import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Note } from './note.entity'

@Entity('label')
export class Label {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column({
    comment: '标签名'
  })
	name: string;
	
	@Column({
		nullable: true
	})
	pId: string;
	
	@CreateDateColumn()
	createTime: Date;
	
	@OneToMany(type => Note, note => note.label)
	notes:Note[]
}
