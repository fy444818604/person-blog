import { Note } from '../entity/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { SearchNoteDto } from './dto/search.note.dot';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    findNote(searchNoteDto: SearchNoteDto): Promise<[Note[], number]>;
    create(createNoteDto: CreateNoteDto): Promise<Note>;
}
