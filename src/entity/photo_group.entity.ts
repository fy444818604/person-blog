import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Photos } from './photos.entity'

@Entity('photo_group')
export class PhotoGroup {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	cover: string;
	
	@Column()
	name: string;
	
	@CreateDateColumn()
	createTime: Date;
	
	@OneToMany(type => Photos, photos => photos.photo)
	photos: Photos[]
}
