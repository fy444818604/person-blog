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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosAddDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PhotosAddDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: '封面url'
    }),
    __metadata("design:type", String)
], PhotosAddDto.prototype, "cover", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '相册名称(max:20)'
    }),
    class_validator_1.MaxLength(20, {
        message: '最长20字符'
    }),
    __metadata("design:type", String)
], PhotosAddDto.prototype, "name", void 0);
exports.PhotosAddDto = PhotosAddDto;
//# sourceMappingURL=photos_add.dto.js.map