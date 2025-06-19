"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const controllers_1 = require("@auth/controllers");
describe('AuthenticationController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [controllers_1.AuthenticationController],
        }).compile();
        controller = module.get(controllers_1.AuthenticationController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=authentication.controller.spec.js.map