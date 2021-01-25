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
exports.Note = void 0;
const typeorm_1 = require("typeorm");
const note_image_entity_1 = require("./note.image.entity");
const label_entity_1 = require("./label.entity");
let Note = class Note {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Note.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        comment: '标题',
    }),
    __metadata("design:type", String)
], Note.prototype, "title", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Note.prototype, "createTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Note.prototype, "noteType", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext'
    }),
    __metadata("design:type", String)
], Note.prototype, "content", void 0);
__decorate([
    typeorm_1.ManyToOne(type => label_entity_1.Label, label => label.notes),
    typeorm_1.JoinColumn(),
    __metadata("design:type", label_entity_1.Label)
], Note.prototype, "label", void 0);
__decorate([
    typeorm_1.OneToMany(type => note_image_entity_1.NoteImage, noteImage => noteImage.note),
    __metadata("design:type", Array)
], Note.prototype, "photos", void 0);
Note = __decorate([
    typeorm_1.Entity('note_main')
], Note);
exports.Note = Note;
//# sourceMappingURL=note.entity.js.map