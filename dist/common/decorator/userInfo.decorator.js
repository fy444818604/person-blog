"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const common_1 = require("@nestjs/common");
let jwt = require("jsonwebtoken");
exports.UserInfo = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['x-token'];
    let user = jwt.decode(token);
    return data ? user && user[data] : user;
});
//# sourceMappingURL=userInfo.decorator.js.map