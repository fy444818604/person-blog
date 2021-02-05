import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PhotosService } from './photos.service'
import { SearchPhotosDto } from './dto/photos_search.dto'
import { PhotosAddDto } from './dto/photos_add.dto'
import { PhotosItemAddDto } from './dto/photos_item_add.dto'
import { Photos } from '../entity/photos.entity'
import { PhotoGroup } from '../entity/photo_group.entity'
import { UserInfo } from '../common/decorator/userInfo.decorator'

@ApiTags('照片')
@Controller('photos')
export class PhotosController {
	constructor(private readonly photosService:PhotosService){}
	
	@Get('/search')
	async findPhotos(@UserInfo('userId') userId: string,@Query() searchPhotosDto:SearchPhotosDto): Promise<PhotoGroup[]> {
		return this.photosService.photosSearch(userId,searchPhotosDto)
	}
	
	@Post('/add')
	async createPhotos(@Body() photosAddDto:PhotosAddDto): Promise<PhotoGroup> {
		return this.photosService.photosAdd(photosAddDto)
	}
	
	@Get('/item/search/:id')
	async findItem(@Param('id') id:string): Promise<Photos[]> {
		return this.photosService.photosItemSearch(id)
	}
	
	@Post('/item/add')
	async createItem(@Body() photosItemAddDto:PhotosItemAddDto): Promise<Photos> {
		return this.photosService.photosItemAdd(photosItemAddDto)
	}
}
