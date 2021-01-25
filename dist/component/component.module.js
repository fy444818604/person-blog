"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentModule = void 0;
const common_1 = require("@nestjs/common");
const component_controller_1 = require("./component.controller");
const component_service_1 = require("./component.service");
const typeorm_1 = require("@nestjs/typeorm");
const components_entity_1 = require("../entity/components.entity");
let ComponentModule = class ComponentModule {
};
ComponentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([components_entity_1.Components]),
        ],
        controllers: [component_controller_1.ComponentController],
        providers: [component_service_1.ComponentService]
    })
], ComponentModule);
exports.ComponentModule = ComponentModule;
//# sourceMappingURL=component.module.js.map