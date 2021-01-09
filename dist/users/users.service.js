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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../entity/users.entity");
const role_menu_entity_1 = require("../entity/role_menu.entity");
const role_entity_1 = require("../entity/role.entity");
let UsersService = class UsersService {
    constructor(users, roleMenu, roles) {
        this.users = users;
        this.roleMenu = roleMenu;
        this.roles = roles;
    }
    async findOne(username) {
        return this.users.findOne({
            where: {
                username: username
            },
            relations: ["roles"]
        });
    }
    async usersAdd(usersDto) {
        return this.users.save(usersDto);
    }
    async findUser(searchUsersDto) {
        return await this.users.findOne({
            where: {
                userId: searchUsersDto.userId || typeorm_2.Like("%"),
                username: searchUsersDto.username || typeorm_2.Like("%")
            }
        });
    }
    async menuAdd(menuDto) {
        return await this.roleMenu.save(menuDto);
    }
    async getMenu(id) {
        return await this.roles.findOne(id, {
            relations: ["roleMenus"]
        });
    }
    async menuSearch() {
        return await this.roleMenu.find();
    }
    async getRoles() {
        return await this.roles.find({
            relations: ["roleMenus"]
        });
    }
    async createRole(createRoleDto) {
        return await this.roles.save(createRoleDto);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.Users)),
    __param(1, typeorm_1.InjectRepository(role_menu_entity_1.RoleMenu)),
    __param(2, typeorm_1.InjectRepository(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map