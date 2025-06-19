"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const services_1 = require("@auth/services");
describe('AuthenticationService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [services_1.AuthenticationService],
        }).compile();
        service = module.get(services_1.AuthenticationService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=authentication.service.spec.js.map