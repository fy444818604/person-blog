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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const photos_service_1 = require("./photos.service");
const photos_search_dto_1 = require("./dto/photos_search.dto");
const photos_add_dto_1 = require("./dto/photos_add.dto");
const photos_item_add_dto_1 = require("./dto/photos_item_add.dto");
let PhotosController = class PhotosController {
    constructor(photosService) {
        this.photosService = photosService;
    }
    async findPhotos(searchPhotosDto) {
        return this.photosService.photosSearch(searchPhotosDto);
    }
    async createPhotos(photosAddDto) {
        return this.photosService.photosAdd(photosAddDto);
    }
    async findItem(id) {
        return this.photosService.photosItemSearch(id);
    }
    async createItem(photosItemAddDto) {
        return this.photosService.photosItemAdd(photosItemAddDto);
    }
};
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photos_search_dto_1.SearchPhotosDto]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "findPhotos", null);
__decorate([
    common_1.Post('/add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photos_add_dto_1.PhotosAddDto]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "createPhotos", null);
__decorate([
    common_1.Get('/item/search/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "findItem", null);
__decorate([
    common_1.Post('/item/add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photos_item_add_dto_1.PhotosItemAddDto]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "createItem", null);
PhotosController = __decorate([
    swagger_1.ApiTags('照片'),
    common_1.Controller('photos'),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], PhotosController);
exports.PhotosController = PhotosController;
//# sourceMappingURL=photos.controller.js.map