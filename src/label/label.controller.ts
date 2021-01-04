import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LabelService } from './label.service'
import { Label } from '../entity/label.entity'
import { CreateLabelDto } from './dto/create.label.dto'

@ApiTags('标签')
@Controller('label')
export class LabelController {
	constructor(private readonly labelService:LabelService){}
	
	@Get('/search')
	async findLabel(): Promise<Label[]> {
		return await this.labelService.labelSearch()
	}
	
	@Get('/search/:id')
	async findOneLabel(@Param('id') id:string): Promise<Label> {
		return await this.labelService.labelSearchOne(id)
	}
	
	@Post('/add')
	async addLabel(@Body() createLabelDto:CreateLabelDto): Promise<Label> {
		return await this.labelService.labelAdd(createLabelDto)
	}
	
	@Post('/edit/:id')
	async update(@Param('id') id:string,@Body() createLabelDto:CreateLabelDto): Promise<Label> {
		return await this.labelService.labelUpdate(id,createLabelDto)
	}
}
