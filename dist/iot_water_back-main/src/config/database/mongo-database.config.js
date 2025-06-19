"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDatabaseConfig = void 0;
const config_1 = require("@nestjs/config");
const mongoDatabaseConfig = () => ({
    imports: [config_1.ConfigModule],
    useFactory: (configService) => ({
        uri: configService.get('MONGO_URL'),
        authSource: configService.get('MONGO_AUTH_SOURCE'),
    }),
    inject: [config_1.ConfigService],
});
exports.mongoDatabaseConfig = mongoDatabaseConfig;
//# sourceMappingURL=mongo-database.config.js.map