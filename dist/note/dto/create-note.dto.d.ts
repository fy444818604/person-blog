import { NoteImage } from '../../entity/note.image.entity';
export declare class CreateNoteDto {
    labelId: string;
    content: string;
    title: string;
    photos: NoteImage[];
}
