import { Repository } from 'typeorm';
import { Note } from '../entity/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { SearchNoteDto } from './dto/search.note.dot';
export declare class NoteService {
    private readonly notes;
    constructor(notes: Repository<Note>);
    noteSearch(searchNoteDto: SearchNoteDto): Promise<[Note[], number]>;
    noteAdd(createNoteDto: CreateNoteDto): Promise<Note>;
}
