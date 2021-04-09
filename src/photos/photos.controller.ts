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
	@ApiOperation({
		summary:'用户相册创建'
	})
	async createPhotos(@UserInfo('userId') userId: string, @Body() photosAddDto:PhotosAddDto): Promise<PhotoGroup> {
		return this.photosService.photosAdd(userId,photosAddDto)
	}
	
	@Get('/item/search/:id')
	@ApiOperation({
		summary:'根据ID查询相册'
	})
	async findItem(@Param('id') id:string): Promise<PhotoGroup> {
		return this.photosService.photosItemSearch(id)
	}
	
	@Post('/item/edit')
	@ApiOperation({
		summary:'用户相册编辑(相片添加)'
	})
	async createItem(@Body() photosItemAddDto:PhotosItemAddDto): Promise<PhotoGroup> {
		return this.photosService.photosItemAdd(photosItemAddDto)
	}
}
