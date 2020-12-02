"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('server', () => ({
    port: process.env.PORT || 3000
}));
//# sourceMappingURL=server.config.js.map