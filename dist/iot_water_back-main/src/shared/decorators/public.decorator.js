"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
const common_1 = require("@nestjs/common");
const consts_1 = require("@shared/consts");
const Public = () => (0, common_1.SetMetadata)(consts_1.IS_PUBLIC, true);
exports.Public = Public;
//# sourceMappingURL=public.decorator.js.map