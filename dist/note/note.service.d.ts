import { Repository } from 'typeorm';
import { Note } from '../entity/note.entity';
import { NoteImage } from '../entity/note.image.entity';
import { Label } from '../entity/label.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { SearchNoteDto } from './dto/search.note.dot';
export declare class NoteService {
    private readonly notes;
    private readonly noteImages;
    private readonly label;
    constructor(notes: Repository<Note>, noteImages: Repository<NoteImage>, label: Repository<Label>);
    noteSearch(searchNoteDto: SearchNoteDto): Promise<[Note[], number]>;
    noteAdd(createNoteDto: CreateNoteDto): Promise<Note>;
}
