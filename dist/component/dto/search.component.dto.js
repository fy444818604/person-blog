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
exports.SearchComponentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SearchComponentDto {
    constructor() {
        this.pageSize = 10;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: 'number' }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SearchComponentDto.prototype, "current", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false, default: 10, type: 'number' }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SearchComponentDto.prototype, "pageSize", void 0);
exports.SearchComponentDto = SearchComponentDto;
//# sourceMappingURL=search.component.dto.js.map