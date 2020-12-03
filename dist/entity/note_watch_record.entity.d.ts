import { Users } from './users.entity';
import { Note } from './note.entity';
export declare class NoteImage {
    id: string;
    createTime: Date;
    user: Users;
    note: Note;
}
