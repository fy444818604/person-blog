"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('database', () => ({
    type: 'mysql',
    host: process.env.DATABASE_HOST || '39.100.252.143',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    database: process.env.DATABASE || 'farm',
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'smile520',
    logging: 'all',
    logger: "file",
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
}));
//# sourceMappingURL=database.config.js.map