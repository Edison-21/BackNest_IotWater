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
exports.ChatDetailEntity = void 0;
const typeorm_1 = require("typeorm");
const chat_entity_1 = require("./chat.entity");
const process_entity_1 = require("./process.entity");
const tag_entity_1 = require("./tag.entity");
let ChatDetailEntity = class ChatDetailEntity {
};
exports.ChatDetailEntity = ChatDetailEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del detalle del chat.',
    }),
    __metadata("design:type", Number)
], ChatDetailEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Mensaje del usuario',
        type: 'text',
        nullable: false,
    }),
    __metadata("design:type", String)
], ChatDetailEntity.prototype, "userMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Respuesta del bot',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatDetailEntity.prototype, "botResponse", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tipo de mensaje',
        nullable: false,
        default: 'text',
    }),
    __metadata("design:type", String)
], ChatDetailEntity.prototype, "messageType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del mensaje',
        nullable: false,
        default: 'sent',
    }),
    __metadata("design:type", String)
], ChatDetailEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tiempo de respuesta en milisegundos',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatDetailEntity.prototype, "responseTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'chat_id',
        comment: 'ID del chat',
    }),
    __metadata("design:type", Number)
], ChatDetailEntity.prototype, "chatId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'process_id',
        comment: 'ID del proceso',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatDetailEntity.prototype, "processId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], ChatDetailEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chat_entity_1.ChatEntity, (chat) => chat.details),
    (0, typeorm_1.JoinColumn)({ name: 'chat_id' }),
    __metadata("design:type", chat_entity_1.ChatEntity)
], ChatDetailEntity.prototype, "chat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => process_entity_1.ProcessEntity, (process) => process.chatDetails),
    (0, typeorm_1.JoinColumn)({ name: 'process_id' }),
    __metadata("design:type", process_entity_1.ProcessEntity)
], ChatDetailEntity.prototype, "process", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_entity_1.TagEntity, (tag) => tag.chatDetails),
    (0, typeorm_1.JoinTable)({
        name: 'chat_detail_tags',
        joinColumn: { name: 'chat_detail_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], ChatDetailEntity.prototype, "tags", void 0);
exports.ChatDetailEntity = ChatDetailEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'chat_details' })
], ChatDetailEntity);
//# sourceMappingURL=chat-detail.entity.js.map