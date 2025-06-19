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
exports.ProcessEntity = void 0;
const typeorm_1 = require("typeorm");
const chat_detail_entity_1 = require("./chat-detail.entity");
const message_response_entity_1 = require("./message-response.entity");
let ProcessEntity = class ProcessEntity {
};
exports.ProcessEntity = ProcessEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del proceso.',
    }),
    __metadata("design:type", Number)
], ProcessEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre del proceso',
        nullable: false,
    }),
    __metadata("design:type", String)
], ProcessEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Descripción del proceso',
        nullable: true,
    }),
    __metadata("design:type", String)
], ProcessEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Palabras clave para activar el proceso',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], ProcessEntity.prototype, "keywords", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Orden de prioridad del proceso',
        default: 0,
    }),
    __metadata("design:type", Number)
], ProcessEntity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del proceso',
        default: true,
    }),
    __metadata("design:type", Boolean)
], ProcessEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], ProcessEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], ProcessEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chat_detail_entity_1.ChatDetailEntity, (detail) => detail.process),
    __metadata("design:type", Array)
], ProcessEntity.prototype, "chatDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_response_entity_1.MessageResponseEntity, (response) => response.process),
    __metadata("design:type", Array)
], ProcessEntity.prototype, "messageResponses", void 0);
exports.ProcessEntity = ProcessEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'processes' })
], ProcessEntity);
//# sourceMappingURL=process.entity.js.map