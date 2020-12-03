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
const platform_express_1 = require("@nestjs/platform-express");
const file_upload_dto_1 = require("./dto/file.upload.dto");
let md5 = require('md5-node');
let fs = require('fs');
let path = require('path');
let UploadController = class UploadController {
    UploadedFile(file, body) {
        let name = md5(new Date().getTime());
        let array = file.originalname.split('.');
        let suffix = array[array.length - 1];
        const writeImage = fs.createWriteStream(path.join(__dirname, '../..', 'public/upload', `${name}.${suffix}`));
        writeImage.write(file.buffer);
        let url = `/upload/${name}.${suffix}`;
        return url;
    }
};
__decorate([
    common_1.Post('/file'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({
        description: '文件上传',
        type: file_upload_dto_1.FileUploadDto,
    }),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "UploadedFile", null);
UploadController = __decorate([
    swagger_1.ApiTags('上传相关'),
    common_1.Controller('upload')
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map