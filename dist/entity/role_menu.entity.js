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
exports.RoleMenu = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
let RoleMenu = class RoleMenu {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], RoleMenu.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        comment: '菜单名称'
    }),
    __metadata("design:type", String)
], RoleMenu.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        comment: '菜单路由'
    }),
    __metadata("design:type", String)
], RoleMenu.prototype, "path", void 0);
__decorate([
    typeorm_1.ManyToMany(type => role_entity_1.Role, role => role.roleMenus),
    __metadata("design:type", Array)
], RoleMenu.prototype, "roles", void 0);
RoleMenu = __decorate([
    typeorm_1.Entity('role_menu')
], RoleMenu);
exports.RoleMenu = RoleMenu;
//# sourceMappingURL=role_menu.entity.js.map