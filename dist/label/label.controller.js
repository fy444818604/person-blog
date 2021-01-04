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
const label_service_1 = require("./label.service");
const create_label_dto_1 = require("./dto/create.label.dto");
let LabelController = class LabelController {
    constructor(labelService) {
        this.labelService = labelService;
    }
    async findLabel() {
        return await this.labelService.labelSearch();
    }
    async findOneLabel(id) {
        return await this.labelService.labelSearchOne(id);
    }
    async addLabel(createLabelDto) {
        return await this.labelService.labelAdd(createLabelDto);
    }
    async update(id, createLabelDto) {
        return await this.labelService.labelUpdate(id, createLabelDto);
    }
};
__decorate([
    common_1.Get('/search'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "findLabel", null);
__decorate([
    common_1.Get('/search/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "findOneLabel", null);
__decorate([
    common_1.Post('/add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_label_dto_1.CreateLabelDto]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "addLabel", null);
__decorate([
    common_1.Post('/edit/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_label_dto_1.CreateLabelDto]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "update", null);
LabelController = __decorate([
    swagger_1.ApiTags('标签'),
    common_1.Controller('label'),
    __metadata("design:paramtypes", [label_service_1.LabelService])
], LabelController);
exports.LabelController = LabelController;
//# sourceMappingURL=label.controller.js.map