import { NoteImage } from './note.image.entity';
import { Label } from './label.entity';
export declare class Note {
    id: string;
    title: string;
    createTime: Date;
    noteType: string;
    content: string;
    label: Label;
    photos: NoteImage[];
}
