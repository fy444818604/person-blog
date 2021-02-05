"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const photos_entity_1 = require("../entity/photos.entity");
const photo_group_entity_1 = require("../entity/photo_group.entity");
let PhotosService = class PhotosService {
    constructor(photo, photoGroup) {
        this.photo = photo;
        this.photoGroup = photoGroup;
    }
    async photosSearch(userId, searchPhotosDto) {
        if (searchPhotosDto.user) {
            return await this.photoGroup.find({
                where: {
                    user: searchPhotosDto.user
                },
                relations: ["photos"]
            });
        }
        else {
            console.log(userId);
            return await this.photoGroup.find({
                where: {
                    userId: userId
                },
                relations: ["photos"]
            });
        }
    }
    async photosAdd(photosAddDto) {
        Object.assign(photosAddDto, { cover: '' });
        return await this.photoGroup.save(photosAddDto);
    }
    async photosItemSearch(id) {
        let photos = await this.photoGroup.findOne(id, {
            relations: ["photos"]
        });
        return photos.photos;
    }
    async photosItemAdd(photosItemAddDto) {
        let item = await this.photo.save(photosItemAddDto);
        let photos = await this.photoGroup.find({
            where: {
                id: photosItemAddDto.photoId
            },
            relations: ['photos']
        });
        photos[0].photos = [...photos[0].photos, item];
        await this.photoGroup.save(photos);
        return item;
    }
};
PhotosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(photos_entity_1.Photos)),
    __param(1, typeorm_1.InjectRepository(photo_group_entity_1.PhotoGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PhotosService);
exports.PhotosService = PhotosService;
//# sourceMappingURL=photos.service.js.map