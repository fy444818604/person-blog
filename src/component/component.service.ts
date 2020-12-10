import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';
import { Components } from '../entity/components.entity'
import { SearchComponentDto } from './dto/search.component.dto'
import { CreateComponentDto } from './dto/create.component.dto'

@Injectable()
export class ComponentService {
	constructor(
		@InjectRepository(Components)
		private readonly components: Repository<Components>
	){}
	
	async componentSearch(searchComponentDto:SearchComponentDto) :Promise<[Components[],number]>{
		console.log(searchComponentDto)
		return await this.components.findAndCount({
			order: {
				createTime: "DESC"
			},
			take: searchComponentDto.pageSize,
			skip: (searchComponentDto.current-1)*searchComponentDto.pageSize,
			cache: true
		})
	}
	
	async componentAdd(createComponentDto:CreateComponentDto): Promise<Components> {
		return await this.components.save(createComponentDto)
	}
}
