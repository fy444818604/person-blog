import { NoteImage } from '../../entity/note.image.entity';
import { Label } from '../../entity/label.entity';
export declare class CreateNoteDto {
    type: Label;
    title: string;
    photos: NoteImage[];
}
