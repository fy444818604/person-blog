"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const common_1 = require("@nestjs/common");
exports.UserInfo = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers.cookie.split('Admin-Token=')[1];
    console.log(this);
    return '111';
});
//# sourceMappingURL=userInfo.decorator.js.map