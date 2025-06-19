"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresDatabaseConfig = void 0;
const config_1 = require("@nestjs/config");
const postgresDatabaseConfig = () => ({
    imports: [config_1.ConfigModule],
    useFactory: (configService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
    }),
    inject: [config_1.ConfigService],
});
exports.postgresDatabaseConfig = postgresDatabaseConfig;
//# sourceMappingURL=postgres-database.config.js.map