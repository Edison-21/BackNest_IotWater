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
var AuthenticationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("./user.service");
const consts_1 = require("@auth/consts");
const config_1 = require("@nestjs/config");
let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    constructor(jwtService, userService, configService) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.configService = configService;
        this.logger = new common_1.Logger(AuthenticationService_1.name, {
            timestamp: true,
        });
    }
    async regenerateTokens(id, username) {
        this.logger.log('Regenerando los tokens');
        const tokens = await this.getTokens(id, username);
        await this.updateRtHash(id, tokens.refresh_token);
        return tokens;
    }
    hashData(data) {
        const saltOrRounds = 10;
        return bcrypt.hash(data, saltOrRounds);
    }
    async getTokens(userId, username) {
        const rtSecret = this.configService.get('RT_SECRET') ?? 'rt-secret';
        const atSecret = this.configService.get('AT_SECRET') ?? 'at-secret';
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                expiresIn: 60 * 15,
                secret: atSecret,
            }),
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                secret: rtSecret,
                expiresIn: 60 * 60 * 24 * 7,
            }),
        ]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
    async updateRtHash(userId, rt) {
        const hash = await this.hashData(rt);
        await this.userService.updateRtHash(userId, hash);
    }
    async passwordMatch(password, hash) {
        const isPasswordEquals = await bcrypt.compare(password, hash);
        if (!isPasswordEquals)
            throw new common_1.ForbiddenException(consts_1.AUTH_MESSAGE_ERROR);
    }
    async rtMatch(rt, hashedRt) {
        const isRtEquals = await bcrypt.compare(rt.trim(), hashedRt);
        if (!isRtEquals) {
            this.logger.error('El refresh token no es válido');
            throw new common_1.ForbiddenException(consts_1.AUTH_MESSAGE_ERROR);
        }
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = AuthenticationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        config_1.ConfigService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map