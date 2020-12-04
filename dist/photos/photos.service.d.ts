import { Repository } from 'typeorm';
import { SearchPhotosDto } from './dto/photos_search.dto';
import { PhotosAddDto } from './dto/photos_add.dto';
import { PhotosItemAddDto } from './dto/photos_item_add.dto';
import { Photos } from '../entity/photos.entity';
import { PhotoGroup } from '../entity/photo_group.entity';
export declare class PhotosService {
    private readonly photo;
    private readonly photoGroup;
    constructor(photo: Repository<Photos>, photoGroup: Repository<PhotoGroup>);
    photosSearch(searchPhotosDto: SearchPhotosDto): Promise<PhotoGroup[]>;
    photosAdd(photosAddDto: PhotosAddDto): Promise<PhotoGroup>;
    photosItemSearch(id: string): Promise<Photos[]>;
    photosItemAdd(photosItemAddDto: PhotosItemAddDto): Promise<Photos>;
}
