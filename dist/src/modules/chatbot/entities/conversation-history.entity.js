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
exports.ConversationHistoryEntity = void 0;
const typeorm_1 = require("typeorm");
const chat_entity_1 = require("./chat.entity");
const utils_1 = require("../../../shared/utils");
let ConversationHistoryEntity = class ConversationHistoryEntity {
    encryptSensitiveData() {
        if (this.message && !this.message.includes('U2FsdGVkX1')) {
            this.message = utils_1.EncryptionUtil.encrypt(this.message);
        }
        if (this.metadata && !this.metadata.includes('U2FsdGVkX1')) {
            this.metadata = utils_1.EncryptionUtil.encrypt(this.metadata);
        }
    }
    decryptSensitiveData() {
        this.decryptedMessage = utils_1.EncryptionUtil.decrypt(this.message);
        this.decryptedMetadata = utils_1.EncryptionUtil.decrypt(this.metadata);
    }
};
exports.ConversationHistoryEntity = ConversationHistoryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del historial de conversación.',
    }),
    __metadata("design:type", Number)
], ConversationHistoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Mensaje completo de la conversación (encriptado)',
        type: 'text',
        nullable: false,
    }),
    __metadata("design:type", String)
], ConversationHistoryEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tipo de participante',
        nullable: false,
    }),
    __metadata("design:type", String)
], ConversationHistoryEntity.prototype, "participantType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Metadatos adicionales (JSON encriptado)',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], ConversationHistoryEntity.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Sesión de la conversación',
        nullable: true,
    }),
    __metadata("design:type", String)
], ConversationHistoryEntity.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'chat_id',
        comment: 'ID del chat',
    }),
    __metadata("design:type", Number)
], ConversationHistoryEntity.prototype, "chatId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], ConversationHistoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chat_entity_1.ChatEntity, (chat) => chat.conversationHistory),
    (0, typeorm_1.JoinColumn)({ name: 'chat_id' }),
    __metadata("design:type", chat_entity_1.ChatEntity)
], ConversationHistoryEntity.prototype, "chat", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConversationHistoryEntity.prototype, "encryptSensitiveData", null);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConversationHistoryEntity.prototype, "decryptSensitiveData", null);
exports.ConversationHistoryEntity = ConversationHistoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'conversation_history' })
], ConversationHistoryEntity);
//# sourceMappingURL=conversation-history.entity.js.map