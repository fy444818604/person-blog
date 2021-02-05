import { PhotosService } from './photos.service';
import { SearchPhotosDto } from './dto/photos_search.dto';
import { PhotosAddDto } from './dto/photos_add.dto';
import { PhotosItemAddDto } from './dto/photos_item_add.dto';
import { Photos } from '../entity/photos.entity';
import { PhotoGroup } from '../entity/photo_group.entity';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    findPhotos(userId: string, searchPhotosDto: SearchPhotosDto): Promise<PhotoGroup[]>;
    createPhotos(photosAddDto: PhotosAddDto): Promise<PhotoGroup>;
    findItem(id: string): Promise<Photos[]>;
    createItem(photosItemAddDto: PhotosItemAddDto): Promise<Photos>;
}
