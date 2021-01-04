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
const label_entity_1 = require("../entity/label.entity");
let LabelService = class LabelService {
    constructor(label) {
        this.label = label;
    }
    async labelSearch() {
        return this.label.find({
            relations: ["notes"]
        });
    }
    async labelSearchOne(id) {
        return this.label.findOne(id);
    }
    async labelAdd(createLabelDto) {
        return await this.label.save(createLabelDto);
    }
    async labelUpdate(id, createLabelDto) {
        let label = await this.label.findOne(id, {
            relations: ["notes"]
        });
        label.name = createLabelDto.name;
        return await this.label.save(label);
    }
};
LabelService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(label_entity_1.Label)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LabelService);
exports.LabelService = LabelService;
//# sourceMappingURL=label.service.js.map