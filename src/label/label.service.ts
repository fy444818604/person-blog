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
		return this.label.find()
	}
	
	async labelAdd(createLabelDto:CreateLabelDto): Promise<Label> {
		return await this.label.save(createLabelDto)
	}
}
