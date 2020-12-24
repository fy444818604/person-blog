import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';
import { Note } from '../entity/note.entity'
import { NoteImage } from '../entity/note.image.entity'
import { Label } from '../entity/label.entity'
import { CreateNoteDto } from './dto/create-note.dto'
import { SearchNoteDto } from './dto/search.note.dot'

@Injectable()
export class NoteService {
	constructor(
		@InjectRepository(Note)
		private readonly notes: Repository<Note>,
		@InjectRepository(NoteImage)
		private readonly noteImages: Repository<NoteImage>,
		@InjectRepository(Label)
		private readonly label: Repository<Label>
	){}
	
	async noteSearch(searchNoteDto:SearchNoteDto): Promise<[Note[],number]> {
		return await this.notes.findAndCount({
			where: {
				noteType: searchNoteDto.labelId || Like("%"),
				title: searchNoteDto.title ? Like(`%${searchNoteDto.title}%`) : Like("%")
			},
			relations:["photos","label"],
			order: {
				createTime: "DESC"
			},
			take: searchNoteDto.pageSize,
			skip: (searchNoteDto.current-1)*searchNoteDto.pageSize,
			cache: true
		})
	}
	
	async noteSearchById(id:string): Promise<Note> {
		return await this.notes.findOne(id)
	}
	
	async noteAdd(createNoteDto:CreateNoteDto): Promise<any> {
		await this.noteImages.save(createNoteDto.photos)
		let labels = await this.label.findOne(createNoteDto.labelId,{
			relations:["notes"]
		})
		const noteDetail = new Note();
		noteDetail.label = {
			id:labels.id,
			name:labels.name,
			pId:labels.pId,
			createTime:labels.createTime,
			notes:labels.notes
		};
		noteDetail.noteType = createNoteDto.labelId;
		noteDetail.title = createNoteDto.title;
		noteDetail.photos = createNoteDto.photos;
		noteDetail.content = createNoteDto.content;
		let note = await this.notes.save(noteDetail)
		
		// labels.notes = [...labels.notes,note]
		// await this.label.save(labels)
		
		return {data:note,msg:'发布文章成功'}
	}
	
	async noteDel(id: string): Promise<any> {
		console.log(id)
		await this.notes.delete(id)
		return {data:[],msg:'删除成功'}
	}
}
