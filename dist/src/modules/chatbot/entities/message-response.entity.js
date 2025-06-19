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
exports.MessageResponseEntity = void 0;
const typeorm_1 = require("typeorm");
const process_entity_1 = require("./process.entity");
let MessageResponseEntity = class MessageResponseEntity {
};
exports.MessageResponseEntity = MessageResponseEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria de la respuesta del mensaje.',
    }),
    __metadata("design:type", Number)
], MessageResponseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Patrón del mensaje de entrada',
        nullable: false,
    }),
    __metadata("design:type", String)
], MessageResponseEntity.prototype, "inputPattern", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Respuesta del bot',
        type: 'text',
        nullable: false,
    }),
    __metadata("design:type", String)
], MessageResponseEntity.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tipo de respuesta',
        nullable: false,
        default: 'text',
    }),
    __metadata("design:type", String)
], MessageResponseEntity.prototype, "responseType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Condiciones adicionales (JSON)',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], MessageResponseEntity.prototype, "conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Orden de prioridad',
        default: 0,
    }),
    __metadata("design:type", Number)
], MessageResponseEntity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado de la respuesta',
        default: true,
    }),
    __metadata("design:type", Boolean)
], MessageResponseEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'process_id',
        comment: 'ID del proceso',
    }),
    __metadata("design:type", Number)
], MessageResponseEntity.prototype, "processId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], MessageResponseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], MessageResponseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => process_entity_1.ProcessEntity, (process) => process.messageResponses),
    (0, typeorm_1.JoinColumn)({ name: 'process_id' }),
    __metadata("design:type", process_entity_1.ProcessEntity)
], MessageResponseEntity.prototype, "process", void 0);
exports.MessageResponseEntity = MessageResponseEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'message_responses' })
], MessageResponseEntity);
//# sourceMappingURL=message-response.entity.js.map