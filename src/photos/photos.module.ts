import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosController } from './photos.controller'
import { PhotosService } from './photos.service'
import { Photos } from '../entity/photos.entity'
import { PhotoGroup } from '../entity/photo_group.entity'
import { Users } from '../entity/users.entity'

@Module({
	imports:[
		TypeOrmModule.forFeature([Photos]),
		TypeOrmModule.forFeature([PhotoGroup]),
		TypeOrmModule.forFeature([Users]),
	],
	controllers: [PhotosController],
	providers: [PhotosService]
})
export class PhotosModule {}
