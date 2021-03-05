import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PhotoGroup } from './photo_group.entity'

@Entity('photos')
export class Photos {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column({
		comment: '相片地址'
	})
	url: string;

	@ManyToOne(type => PhotoGroup, photoGroup => photoGroup.photos)
	photo: PhotoGroup;
}