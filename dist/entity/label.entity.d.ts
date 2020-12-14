import { Note } from './note.entity';
export declare class Label {
    id: string;
    name: string;
    pId: string;
    createTime: Date;
    notes: Note[];
}
