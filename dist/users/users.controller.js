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
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users.dto");
const search_users_dto_1 = require("./dto/search.users.dto");
const create_role_dto_1 = require("./dto/create.role.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async usersAdd(usersDto) {
        return this.usersService.usersAdd(usersDto);
    }
    async userFind(searchUsersDto) {
        return this.usersService.findUser(searchUsersDto);
    }
    async menuAdd(menuDto) {
        await this.usersService.menuAdd(menuDto);
    }
    async menuSearch() {
        return await this.usersService.menuSearch();
    }
    async getMenu(id) {
        return await this.usersService.getMenu(id);
    }
    async getRoles() {
        return await this.usersService.getRoles();
    }
    async createRole(createRoleDto) {
        if (createRoleDto.id == "")
            delete createRoleDto.id;
        return await this.usersService.createRole(createRoleDto);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: '增加一个用户'
    }),
    common_1.Post('add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "usersAdd", null);
__decorate([
    swagger_1.ApiOperation({
        summary: '查询用户'
    }),
    common_1.Get('search'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_users_dto_1.SearchUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userFind", null);
__decorate([
    swagger_1.ApiOperation({
        summary: '添加菜单'
    }),
    common_1.Post('role/menu'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "menuAdd", null);
__decorate([
    swagger_1.ApiOperation({
        summary: '获取权限菜单'
    }),
    common_1.Get('role/menus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "menuSearch", null);
__decorate([
    swagger_1.ApiOperation({
        summary: '获取角色菜单'
    }),
    common_1.Get('role/menuFind/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMenu", null);
__decorate([
    swagger_1.ApiOperation({
        summary: '获取所有角色'
    }),
    common_1.Get('role/roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getRoles", null);
__decorate([
    swagger_1.ApiOperation({
        summary: '创建角色'
    }),
    common_1.Post('role/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createRole", null);
UsersController = __decorate([
    swagger_1.ApiTags('用户相关'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map