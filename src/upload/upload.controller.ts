import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadDto } from './dto/file.upload.dto'
let md5 = require('md5-node');
let fs = require('fs')
let path = require('path');

@ApiTags('上传相关')
@Controller('upload')
export class UploadController {
	@Post('/file')
	@UseInterceptors(FileInterceptor('file'))
	@ApiConsumes('multipart/form-data')
	@ApiBody({
	  description: '文件上传',
	  type: FileUploadDto,
	})
	UploadedFile(@UploadedFile() file, @Body() body){
		let name = md5(new Date().getTime())
		let array = file.originalname.split('.')
		let suffix = array[array.length - 1]
		const writeImage = fs.createWriteStream(path.join(__dirname, '../..', 'public/upload', `${name}.${suffix}`))
		writeImage.write(file.buffer)
		let url = `/upload/${name}.${suffix}`
		return url
	}
}
