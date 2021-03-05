import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, RelationId } from 'typeorm';
import { Photos } from './photos.entity'
import { Users } from './users.entity'

@Entity('photo_group')
export class PhotoGroup {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column({
    comment: '相册封面',
		nullable: true
  })
	cover: string;
	
	@Column({
    comment: '相册名称',
  })
	name: string;
	
	@ManyToOne(type => Users,users => users.photoGroups)
	user: Users;
	
	@RelationId((photoGroup:PhotoGroup) => photoGroup.user)
	userId:string
	
	@CreateDateColumn({
    comment: '相册创建时间',
  })
	createTime: Date;
	
	@OneToMany(type => Photos, photos => photos.photo)
	photos: Photos[]
}
