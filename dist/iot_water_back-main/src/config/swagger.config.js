"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSwagger = initSwagger;
const swagger_1 = require("@nestjs/swagger");
function initSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Iot water')
        .setDescription('Proyecto para medir el agua')
        .setVersion('0.0.1')
        .addTag('water')
        .addBearerAuth()
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
}
//# sourceMappingURL=swagger.config.js.map