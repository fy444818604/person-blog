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
const note_entity_1 = require("../entity/note.entity");
const note_image_entity_1 = require("../entity/note.image.entity");
let NoteService = class NoteService {
    constructor(notes, noteImages) {
        this.notes = notes;
        this.noteImages = noteImages;
    }
    async noteSearch(searchNoteDto) {
        return await this.notes.findAndCount({
            where: {
                type: searchNoteDto.type || typeorm_2.Like("%"),
                title: searchNoteDto.title ? typeorm_2.Like(`%${searchNoteDto.title}%`) : typeorm_2.Like("%")
            },
            relations: ["photos", "type"],
            order: {
                createTime: "DESC"
            },
            take: searchNoteDto.pageSize,
            skip: (searchNoteDto.current - 1) * searchNoteDto.pageSize,
            cache: true
        });
    }
    async noteAdd(createNoteDto) {
        await this.noteImages.save(createNoteDto.photos);
        return await this.notes.save(createNoteDto);
    }
};
NoteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(note_entity_1.Note)),
    __param(1, typeorm_1.InjectRepository(note_image_entity_1.NoteImage)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map