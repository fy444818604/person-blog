import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from '../entity/note.entity'
import { CreateNoteDto } from './dto/create-note.dto'
import { SearchNoteDto } from './dto/search.note.dot'

@Injectable()
export class NoteService {
	constructor(
		@InjectRepository(Note)
		private readonly notes: Repository<Note>
	){}
	
	async noteSearch(searchNoteDto:SearchNoteDto): Promise<[Note[],number]> {
		console.log(searchNoteDto)
		return await this.notes.findAndCount({
			where: {
				type: searchNoteDto.type,
				title: searchNoteDto.title
			},
			order: {
				createTime: "DESC"
			},
			take: searchNoteDto.pageSize,
			skip: (searchNoteDto.current-1)*searchNoteDto.pageSize,
			cache: true
		})
	}
	
	async noteAdd(createNoteDto:CreateNoteDto): Promise<Note> {
		return await this.notes.save(createNoteDto)
	}
}
