import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
// import { Note } from './note.entity'

@Entity('label')
export class Label {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	name: string;
	
	@Column()
	pId: string;
	
	@CreateDateColumn()
	createTime: Date;
	
	// @OneToMany(type => Note, note => note.type)
	// notes:Note[]
}
