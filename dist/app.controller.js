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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth/auth.service");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("./auth/dto/login.dto");
const nest_winston_1 = require("nest-winston");
let AppController = class AppController {
    constructor(authService, appService, logger) {
        this.authService = authService;
        this.appService = appService;
        this.logger = logger;
    }
    root(res) {
        res.render('index');
    }
    async login(loginDto) {
        this.logger.log('开始登录');
        let pass = await this.authService.validateUser(loginDto.username, loginDto.password);
        if (pass) {
            return this.authService.login(pass);
        }
        this.logger.error('账号/密码错误');
        throw new common_1.HttpException({
            status: 500,
            message: '账号/密码错误',
        }, 500);
    }
    async getInfo(token) {
        return await this.authService.getUersInfo(token);
    }
    getProfile(req) {
        return req.user;
    }
    async getLive() {
        return await this.appService.getLive1();
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
__decorate([
    common_1.Post('auth/login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    common_1.Get('userInfo'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getInfo", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('auth/profile'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    common_1.Post('getLive'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getLive", null);
AppController = __decorate([
    swagger_1.ApiTags('token获取'),
    common_1.Controller(),
    __param(2, common_1.Inject(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER)),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        app_service_1.AppService, Object])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map