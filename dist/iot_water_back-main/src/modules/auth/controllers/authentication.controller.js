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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const facades_1 = require("@auth/facades");
const dtos_1 = require("@auth/dtos");
const swagger_1 = require("@nestjs/swagger");
const guards_1 = require("@shared/guards");
const decorators_1 = require("@shared/decorators");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationFacade) {
        this.authenticationFacade = authenticationFacade;
    }
    login(payload) {
        return this.authenticationFacade.login(payload);
    }
    register(payload) {
        return this.authenticationFacade.register(payload);
    }
    logout(userId) {
        return this.authenticationFacade.logout(userId);
    }
    restorePassword() {
        return this.authenticationFacade.restorePassword(0);
    }
    refresh(userId, refreshToken) {
        return this.authenticationFacade.refresh({ userId, refreshToken });
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.LoginDto !== "undefined" && dtos_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Object)
], AuthenticationController.prototype, "login", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.AuthDto !== "undefined" && dtos_1.AuthDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(guards_1.AtGuard),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('restore-password'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AuthenticationController.prototype, "restorePassword", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.UseGuards)(guards_1.RtGuard),
    (0, common_1.Post)('refresh'),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __param(1, (0, decorators_1.GetCurrentUser)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Object)
], AuthenticationController.prototype, "refresh", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof facades_1.AuthenticationFacade !== "undefined" && facades_1.AuthenticationFacade) === "function" ? _a : Object])
], AuthenticationController);
//# sourceMappingURL=authentication.controller.js.map