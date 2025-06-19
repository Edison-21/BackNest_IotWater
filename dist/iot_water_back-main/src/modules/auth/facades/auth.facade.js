"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthenticationFacade_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationFacade = void 0;
const services_1 = require("@auth/services");
const common_1 = require("@nestjs/common");
let AuthenticationFacade = AuthenticationFacade_1 = class AuthenticationFacade {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.logger = new common_1.Logger(AuthenticationFacade_1.name, {
            timestamp: true,
        });
    }
    async login(payload) {
        this.logger.log(`Buscando el usuario ${payload.username}`);
        const user = await this.userService.findOneByUsername(payload);
        this.logger.log(`Verificando la contraseña del usuario ${payload.username}`);
        await this.authService.passwordMatch(payload.password, user.password);
        return await this.authService.regenerateTokens(user.id, user.username);
    }
    async register(payload) {
        this.logger.log('Encriptando contraseña...');
        const hashedPassword = { ...payload };
        hashedPassword.password = await this.authService.hashData(payload.password);
        this.logger.log('Se encripto la contraseña');
        const user = await this.userService.create(hashedPassword);
        return await this.authService.regenerateTokens(user.id, user.username);
    }
    logout(userId) {
        return this.userService.updateUsersWithRefreshToken(userId);
    }
    restorePassword(identity) {
        return identity;
    }
    async refresh(data) {
        this.logger.log('Refrescando token...');
        const user = await this.userService.findOneById(data.userId);
        this.logger.log('Validando Refresh token');
        await this.authService.rtMatch(data.refreshToken, user.refreshToken);
        return await this.authService.regenerateTokens(user.id, user.username);
    }
};
exports.AuthenticationFacade = AuthenticationFacade;
exports.AuthenticationFacade = AuthenticationFacade = AuthenticationFacade_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.UserService !== "undefined" && services_1.UserService) === "function" ? _a : Object, typeof (_b = typeof services_1.AuthenticationService !== "undefined" && services_1.AuthenticationService) === "function" ? _b : Object])
], AuthenticationFacade);
//# sourceMappingURL=auth.facade.js.map