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
const typeorm_1 = require("typeorm");
const note_entity_1 = require("./note.entity");
let NoteImage = class NoteImage {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], NoteImage.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], NoteImage.prototype, "url", void 0);
__decorate([
    typeorm_1.ManyToOne(type => note_entity_1.Note, note => note.photos),
    __metadata("design:type", note_entity_1.Note)
], NoteImage.prototype, "note", void 0);
NoteImage = __decorate([
    typeorm_1.Entity('note_image')
], NoteImage);
exports.NoteImage = NoteImage;
//# sourceMappingURL=note.image.entity.js.map