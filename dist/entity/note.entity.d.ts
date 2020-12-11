import { NoteImage } from './note.image.entity';
import { Label } from './label.entity';
export declare class Note {
    id: string;
    type: Label;
    title: string;
    createTime: Date;
    photos: NoteImage[];
}
