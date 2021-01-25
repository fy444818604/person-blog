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
exports.ComponentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const component_service_1 = require("./component.service");
const search_component_dto_1 = require("./dto/search.component.dto");
const create_component_dto_1 = require("./dto/create.component.dto");
let ComponentController = class ComponentController {
    constructor(componentService) {
        this.componentService = componentService;
    }
    async findComponent(searchComponentDto) {
        return await this.componentService.componentSearch(searchComponentDto);
    }
    async addComponent(createComponentDto) {
        return await this.componentService.componentAdd(createComponentDto);
    }
};
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_component_dto_1.SearchComponentDto]),
    __metadata("design:returntype", Promise)
], ComponentController.prototype, "findComponent", null);
__decorate([
    common_1.Post('/add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_component_dto_1.CreateComponentDto]),
    __metadata("design:returntype", Promise)
], ComponentController.prototype, "addComponent", null);
ComponentController = __decorate([
    swagger_1.ApiTags('组件'),
    common_1.Controller('component'),
    __metadata("design:paramtypes", [component_service_1.ComponentService])
], ComponentController);
exports.ComponentController = ComponentController;
//# sourceMappingURL=component.controller.js.map