import { Photos } from './photos.entity';
import { Users } from './users.entity';
export declare class PhotoGroup {
    id: string;
    cover: string;
    name: string;
    user: Users;
    userId: string;
    createTime: Date;
    photos: Photos[];
}
