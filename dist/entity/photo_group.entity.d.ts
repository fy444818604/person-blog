import { Photos } from './photos.entity';
export declare class PhotoGroup {
    id: string;
    cover: string;
    name: string;
    user: string;
    createTime: Date;
    photos: Photos[];
}
