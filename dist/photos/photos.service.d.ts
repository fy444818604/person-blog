import { Repository } from 'typeorm';
import { PhotosAddDto } from './dto/photos_add.dto';
import { PhotosItemAddDto } from './dto/photos_item_add.dto';
import { Photos } from '../entity/photos.entity';
import { PhotoGroup } from '../entity/photo_group.entity';
import { Users } from '../entity/users.entity';
export declare class PhotosService {
    private readonly photo;
    private readonly photoGroup;
    private readonly users;
    constructor(photo: Repository<Photos>, photoGroup: Repository<PhotoGroup>, users: Repository<Users>);
    photosSearch(userId: string): Promise<[PhotoGroup[], number]>;
    photosAdd(userId: string, photosAddDto: PhotosAddDto): Promise<PhotoGroup>;
    photosItemSearch(id: string): Promise<PhotoGroup>;
    photosItemAdd(photosItemAddDto: PhotosItemAddDto): Promise<Photos>;
}
