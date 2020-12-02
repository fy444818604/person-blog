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
const create_note_dto_1 = require("./dto/create-note.dto");
const note_service_1 = require("./note.service");
const search_note_dot_1 = require("./dto/search.note.dot");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    async findNote(searchNoteDto) {
        return this.noteService.noteSearch(searchNoteDto);
    }
    async create(createNoteDto) {
        return await this.noteService.noteAdd(createNoteDto);
    }
};
__decorate([
    common_1.Get('/noteSearch'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_note_dot_1.SearchNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "findNote", null);
__decorate([
    common_1.Post('/noteAdd'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "create", null);
NoteController = __decorate([
    swagger_1.ApiTags('笔记'),
    common_1.Controller('note'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map