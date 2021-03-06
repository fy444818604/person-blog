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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
const photo_group_entity_1 = require("./photo_group.entity");
let Users = class Users {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Users.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({
        comment: '账号'
    }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        default: '123456',
        comment: '用户密码'
    }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        default: '',
        comment: '用户昵称'
    }),
    __metadata("design:type", String)
], Users.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column({
        default: true,
        comment: '账号状态(1:启用中,2:停用中)'
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => role_entity_1.Role, role => role.users),
    typeorm_1.JoinColumn(),
    __metadata("design:type", role_entity_1.Role)
], Users.prototype, "roles", void 0);
__decorate([
    typeorm_1.OneToMany(type => photo_group_entity_1.PhotoGroup, photoGroup => photoGroup.user),
    __metadata("design:type", Array)
], Users.prototype, "photoGroups", void 0);
Users = __decorate([
    typeorm_1.Entity('user')
], Users);
exports.Users = Users;
//# sourceMappingURL=users.entity.js.map