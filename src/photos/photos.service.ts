import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';
import { SearchPhotosDto } from './dto/photos_search.dto'
import { PhotosAddDto } from './dto/photos_add.dto'
import { PhotosItemAddDto } from './dto/photos_item_add.dto'
import { Photos } from '../entity/photos.entity'
import { PhotoGroup } from '../entity/photo_group.entity'

@Injectable()
export class PhotosService {
	constructor(
		@InjectRepository(Photos)
		private readonly photo: Repository<Photos>,
		@InjectRepository(PhotoGroup)
		private readonly photoGroup: Repository<PhotoGroup>
	){}
	
	async photosSearch(searchPhotosDto:SearchPhotosDto):Promise<PhotoGroup[]> {
		return await this.photoGroup.find({
			where: {
				user:searchPhotosDto.user
			},
			relations:["photos"]
		})
	}
	
	async photosAdd(photosAddDto:PhotosAddDto): Promise<PhotoGroup> {
		Object.assign(photosAddDto,{cover: ''})
		return await this.photoGroup.save(photosAddDto)
	}
	
	async photosItemSearch(id: string): Promise<Photos[]> {
		let photos = await this.photoGroup.findOne(id,{
			relations:["photos"]
		})
		return photos.photos
	}
	
	async photosItemAdd(photosItemAddDto:PhotosItemAddDto): Promise<Photos> {
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
