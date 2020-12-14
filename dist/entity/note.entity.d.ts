import { NoteImage } from './note.image.entity';
import { Label } from './label.entity';
export declare class Note {
    id: string;
    title: string;
    createTime: Date;
    label: Label;
    photos: NoteImage[];
}
