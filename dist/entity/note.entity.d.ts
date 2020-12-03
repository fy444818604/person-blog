import { NoteImage } from './note.image.entity';
export declare class Note {
    id: string;
    type: string;
    title: string;
    createTime: Date;
    photos: NoteImage[];
}
