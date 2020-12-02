import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

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
}
