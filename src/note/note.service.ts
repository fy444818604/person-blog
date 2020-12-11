import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';
import { Note } from '../entity/note.entity'
import { NoteImage } from '../entity/note.image.entity'
import { CreateNoteDto } from './dto/create-note.dto'
import { SearchNoteDto } from './dto/search.note.dot'

@Injectable()
export class NoteService {
	constructor(
		@InjectRepository(Note)
		private readonly notes: Repository<Note>,
		@InjectRepository(NoteImage)
		private readonly noteImages: Repository<NoteImage>
	){}
	
	async noteSearch(searchNoteDto:SearchNoteDto): Promise<[Note[],number]> {
		return await this.notes.findAndCount({
			where: {
				type:  searchNoteDto.type || Like("%"),
				title: searchNoteDto.title ? Like(`%${searchNoteDto.title}%`) : Like("%")
			},
			relations:["photos","type"],
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
		return await this.notes.save(createNoteDto)
	}
}
