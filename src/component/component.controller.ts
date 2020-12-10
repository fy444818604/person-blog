import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComponentService } from './component.service'
import { Components } from '../entity/components.entity'
import { SearchComponentDto } from './dto/search.component.dto'
import { CreateComponentDto } from './dto/create.component.dto'

@ApiTags('组件')
@Controller('component')
export class ComponentController {
	constructor(private readonly componentService:ComponentService){}
	
	@Get('/search')
	async findComponent(@Query() searchComponentDto:SearchComponentDto): Promise<[Components[],number]>{
		return await this.componentService.componentSearch(searchComponentDto)
	}
	
	@Post('/add')
	async addComponent(@Body() createComponentDto:CreateComponentDto): Promise<Components> {
		return await this.componentService.componentAdd(createComponentDto)
	}
}
