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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = exports.AuthDto = void 0;
const class_validator_1 = require("class-validator");
const utils_1 = require("../../../../../src/shared/utils");
const swagger_1 = require("@nestjs/swagger");
const USERNAME_PROPERTY = 'username';
const EMAIL_PROPERTY = 'email';
const PASSWORD_PROPERTY = 'password';
const PASSWORD_LENGTH_PROPERTY = 5;
class AuthDto {
}
exports.AuthDto = AuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: false,
        description: 'Usuario que permitirá el acceso a la API',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, utils_1.isEmptyMessage)(USERNAME_PROPERTY) }),
    __metadata("design:type", String)
], AuthDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: false,
        description: 'Correo Electronico para verificar que sea un correo valido',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, utils_1.isEmptyMessage)(EMAIL_PROPERTY) }),
    (0, class_validator_1.IsEmail)({}, { message: (0, utils_1.isEmailMessage)() }),
    (0, class_validator_1.IsString)({ message: (0, utils_1.isStringMessage)(EMAIL_PROPERTY) }),
    __metadata("design:type", String)
], AuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: false,
        description: 'Contraseña del usuario que permitirá el acceso a la API',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, utils_1.isEmptyMessage)(PASSWORD_PROPERTY) }),
    (0, class_validator_1.IsString)({ message: (0, utils_1.isStringMessage)(PASSWORD_PROPERTY) }),
    (0, class_validator_1.MinLength)(PASSWORD_LENGTH_PROPERTY, {
        message: (0, utils_1.minLengthMessage)(PASSWORD_PROPERTY, PASSWORD_LENGTH_PROPERTY),
    }),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: false,
        description: 'Usuario que permitirá el acceso a la API',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, utils_1.isEmptyMessage)(USERNAME_PROPERTY) }),
    __metadata("design:type", String)
], LoginDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: false,
        description: 'Contraseña del usuario que permitirá el acceso a la API',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, utils_1.isEmptyMessage)(PASSWORD_PROPERTY) }),
    (0, class_validator_1.IsString)({ message: (0, utils_1.isStringMessage)(PASSWORD_PROPERTY) }),
    (0, class_validator_1.MinLength)(PASSWORD_LENGTH_PROPERTY, {
        message: (0, utils_1.minLengthMessage)(PASSWORD_PROPERTY, PASSWORD_LENGTH_PROPERTY),
    }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
//# sourceMappingURL=auth.dto.js.map