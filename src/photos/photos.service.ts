import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';
import { SearchPhotosDto } from './dto/photos_search.dto'
import { PhotosAddDto } from './dto/photos_add.dto'
import { PhotosItemAddDto } from './dto/photos_item_add.dto'
import { Photos } from '../entity/photos.entity'
import { PhotoGroup } from '../entity/photo_group.entity'
import { Users } from '../entity/users.entity'

@Injectable()
export class PhotosService {
	constructor(
		@InjectRepository(Photos)
		private readonly photo: Repository<Photos>,
		@InjectRepository(PhotoGroup)
		private readonly photoGroup: Repository<PhotoGroup>,
		@InjectRepository(Users)
		private readonly users: Repository<Users>,
	){}
	
	async photosSearch(userId: string):Promise<[PhotoGroup[],number]> {
		return await this.photoGroup.findAndCount({
			where: {
				user:{
					userId:userId,
				}
			},
			select:["cover","createTime","name","id"],
			relations:["photos","user"],
		})
	}
	
	async photosAdd(userId: string,photosAddDto:PhotosAddDto): Promise<PhotoGroup> {
		const photoGroup = new PhotoGroup()
		photoGroup.cover = photosAddDto.cover
		photoGroup.name = photosAddDto.name
		photoGroup.user = await this.users.findOne(userId) 
		return await this.photoGroup.save(photoGroup)
	}
	
	async photosItemSearch(id: string): Promise<PhotoGroup> {
		return this.photoGroup.findOne(id,{
			relations:["photos"]
		})
	}
	
	async photosItemAdd(photosItemAddDto:PhotosItemAddDto): Promise<PhotoGroup> {
		let item = await this.photo.save(photosItemAddDto)
		let photos = await this.photoGroup.find({
			where: {
				id: photosItemAddDto.photoId
			},
			relations:['photos']
		})
		photos[0].photos = [...photos[0].photos,item]
		await this.photoGroup.save(photos)
		return item
	}
}
