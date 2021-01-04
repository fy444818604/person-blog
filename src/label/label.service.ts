import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';
import { Label } from '../entity/label.entity'
import { CreateLabelDto } from './dto/create.label.dto'

@Injectable()
export class LabelService {
	constructor(
		@InjectRepository(Label)
		private readonly label: Repository<Label>
	){}
	
	async labelSearch(): Promise<Label[]> {
		return this.label.find({
			relations:["notes"]
		})
	}
	
	async labelSearchOne(id: string): Promise<Label> {
		return this.label.findOne(id)
	}
	
	async labelAdd(createLabelDto:CreateLabelDto): Promise<Label> {
		return await this.label.save(createLabelDto)
	}
	
	async labelUpdate(id:string, createLabelDto:CreateLabelDto): Promise<Label> {
		let label = await this.label.findOne(id,{
			relations:["notes"]
		})
		label.name = createLabelDto.name
		return await this.label.save(label)
	}
	
}
