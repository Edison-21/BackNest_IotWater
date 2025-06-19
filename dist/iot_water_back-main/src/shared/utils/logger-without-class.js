"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerWithoutClass = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
class LoggerWithoutClass {
}
exports.LoggerWithoutClass = LoggerWithoutClass;
LoggerWithoutClass.logger = new common_1.Logger(core_1.NestApplication.name, {
    timestamp: true,
});
//# sourceMappingURL=logger-without-class.js.map