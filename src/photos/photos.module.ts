import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosController } from './photos.controller'
import { PhotosService } from './photos.service'
import { Photos } from '../entity/photos.entity'
import { PhotoGroup } from '../entity/photo_group.entity'

@Module({
	imports:[
		TypeOrmModule.forFeature([Photos]),
		TypeOrmModule.forFeature([PhotoGroup]),
	],
	controllers: [PhotosController],
	providers: [PhotosService]
})
export class PhotosModule {}
