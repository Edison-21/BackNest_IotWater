"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_config_1 = require("@config/swagger.config");
const common_1 = require("@nestjs/common");
const logger_without_class_1 = require("@shared/utils/logger-without-class");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: new common_1.ConsoleLogger({}),
    });
    (0, swagger_config_1.initSwagger)(app);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
    const configService = new config_1.ConfigService();
    const port = configService.get('PORT') || 3000;
    logger_without_class_1.LoggerWithoutClass.logger.log(`Running on port: ${port}`);
}
void bootstrap()
    .then((r) => r)
    .catch();
//# sourceMappingURL=main.js.map