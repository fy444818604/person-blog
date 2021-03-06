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
exports.CreateNoteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateNoteDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: '所属标签Id'
    }),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "labelId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '文章富文本'
    }),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "content", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '文章标题(非空,max:20)'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(20, {
        message: "最长不得超过20"
    }),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '文章插图(数组)'
    }),
    __metadata("design:type", Array)
], CreateNoteDto.prototype, "photos", void 0);
exports.CreateNoteDto = CreateNoteDto;
//# sourceMappingURL=create-note.dto.js.map