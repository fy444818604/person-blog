import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('components')
export class Components {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	title: string;
	
	@Column()
	describe: string;
	
	@Column()
	url: string;
	
	@CreateDateColumn()
	createTime: Date;
}