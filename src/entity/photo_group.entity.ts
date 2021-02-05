import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, RelationId } from 'typeorm';
import { Photos } from './photos.entity'
import { Users } from './users.entity'

@Entity('photo_group')
export class PhotoGroup {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column()
	cover: string;
	
	@Column()
	name: string;
	
	@ManyToOne(type => Users,users => users.photoGroups)
	user: Users;
	
	@RelationId((photoGroup:PhotoGroup) => photoGroup.user)
	userId:string
	
	@CreateDateColumn()
	createTime: Date;
	
	@OneToMany(type => Photos, photos => photos.photo)
	photos: Photos[]
}
