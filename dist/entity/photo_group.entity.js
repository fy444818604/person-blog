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
exports.PhotoGroup = void 0;
const typeorm_1 = require("typeorm");
const photos_entity_1 = require("./photos.entity");
const users_entity_1 = require("./users.entity");
let PhotoGroup = class PhotoGroup {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], PhotoGroup.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        comment: '相册封面',
        nullable: true
    }),
    __metadata("design:type", String)
], PhotoGroup.prototype, "cover", void 0);
__decorate([
    typeorm_1.Column({
        comment: '相册名称',
    }),
    __metadata("design:type", String)
], PhotoGroup.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.Users, users => users.photoGroups),
    __metadata("design:type", users_entity_1.Users)
], PhotoGroup.prototype, "user", void 0);
__decorate([
    typeorm_1.RelationId((photoGroup) => photoGroup.user),
    __metadata("design:type", String)
], PhotoGroup.prototype, "userId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        comment: '相册创建时间',
    }),
    __metadata("design:type", Date)
], PhotoGroup.prototype, "createTime", void 0);
__decorate([
    typeorm_1.OneToMany(type => photos_entity_1.Photos, photos => photos.photo),
    __metadata("design:type", Array)
], PhotoGroup.prototype, "photos", void 0);
PhotoGroup = __decorate([
    typeorm_1.Entity('photo_group')
], PhotoGroup);
exports.PhotoGroup = PhotoGroup;
//# sourceMappingURL=photo_group.entity.js.map