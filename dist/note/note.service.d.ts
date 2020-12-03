import { Repository } from 'typeorm';
import { Note } from '../entity/note.entity';
import { NoteImage } from '../entity/note.image.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { SearchNoteDto } from './dto/search.note.dot';
export declare class NoteService {
    private readonly notes;
    private readonly noteImages;
    constructor(notes: Repository<Note>, noteImages: Repository<NoteImage>);
    noteSearch(searchNoteDto: SearchNoteDto): Promise<[Note[], number]>;
    noteAdd(createNoteDto: CreateNoteDto): Promise<Note>;
}
