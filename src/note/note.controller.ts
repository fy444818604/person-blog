import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Note } from '../entity/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { SearchNoteDto } from './dto/search.note.dot'

@ApiTags('笔记')
@Controller('note')
export class NoteController {
	constructor(private readonly noteService:NoteService){}
	
	@Get('/noteSearch')
	async findNote(@Query() searchNoteDto:SearchNoteDto): Promise<[Note[],number]> {
		return this.noteService.noteSearch(searchNoteDto)
	}
	
	@Post('/noteAdd')
	async create(@Body() createNoteDto:CreateNoteDto): Promise<Note> {
		return await this.noteService.noteAdd(createNoteDto)
	}
}
