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
		console.log(searchNoteDto.labelId)
		return await this.notes.findAndCount({
			where: {
				labelId: searchNoteDto.labelId || Like("%"),
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
	
	async noteAdd(createNoteDto:CreateNoteDto): Promise<Note> {
		await this.noteImages.save(createNoteDto.photos)
		let labels = new Label()
		labels = await this.label.findOne(createNoteDto.label)
		const noteDetail = new Note();
		// const label = new Label();
		// console.log(label)
		noteDetail.label = labels;
		noteDetail.title = createNoteDto.title;
		noteDetail.photos = createNoteDto.photos
		console.log(noteDetail)
		let note = await this.notes.save(noteDetail)
		console.log(note)
		
		
		console.log(labels)
		// labels.notes = createNoteDto
		// await this.label.save(labels)
		return note
	}
}
