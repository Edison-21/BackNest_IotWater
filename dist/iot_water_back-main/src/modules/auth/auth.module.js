"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("@auth/controllers");
const services_1 = require("@auth/services");
const facades_1 = require("@auth/facades");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("@auth/entities");
const strategies_1 = require("./strategies");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.UserEntity]), jwt_1.JwtModule.register({})],
        providers: [
            facades_1.AuthenticationFacade,
            strategies_1.AtStrategy,
            strategies_1.RtStrategy,
            services_1.UserService,
            services_1.AuthenticationService,
            entities_1.UserEntity,
        ],
        exports: [services_1.UserService],
        controllers: [controllers_1.AuthenticationController],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map