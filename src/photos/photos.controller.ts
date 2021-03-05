import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
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
	@ApiOperation({
		summary:'用户相册列表'
	})
	async findPhotos(@UserInfo('userId') userId: string): Promise<[PhotoGroup[],number]> {
		return this.photosService.photosSearch(userId)
	}
	
	@Post('/add')
	async createPhotos(@UserInfo('userId') userId: string, @Body() photosAddDto:PhotosAddDto): Promise<PhotoGroup> {
		return this.photosService.photosAdd(userId,photosAddDto)
	}
	
	@Get('/item/search/:id')
	async findItem(@Param('id') id:string): Promise<PhotoGroup> {
		return this.photosService.photosItemSearch(id)
	}
	
	@Post('/item/add')
	async createItem(@Body() photosItemAddDto:PhotosItemAddDto): Promise<Photos> {
		return this.photosService.photosItemAdd(photosItemAddDto)
	}
}
