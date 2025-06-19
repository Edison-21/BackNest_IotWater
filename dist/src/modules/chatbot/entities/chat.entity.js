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
exports.ChatEntity = void 0;
const typeorm_1 = require("typeorm");
const chat_detail_entity_1 = require("./chat-detail.entity");
const conversation_history_entity_1 = require("./conversation-history.entity");
const utils_1 = require("../../../shared/utils");
let ChatEntity = class ChatEntity {
    encryptSensitiveData() {
        if (this.phoneNumber && !this.phoneNumber.includes('U2FsdGVkX1')) {
            this.phoneNumber = utils_1.EncryptionUtil.encrypt(this.phoneNumber);
        }
        if (this.userName && !this.userName.includes('U2FsdGVkX1')) {
            this.userName = utils_1.EncryptionUtil.encrypt(this.userName);
        }
    }
    decryptSensitiveData() {
        this.decryptedPhoneNumber = utils_1.EncryptionUtil.decrypt(this.phoneNumber);
        this.decryptedUserName = utils_1.EncryptionUtil.decrypt(this.userName);
    }
};
exports.ChatEntity = ChatEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del chat.',
    }),
    __metadata("design:type", Number)
], ChatEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Número de teléfono del usuario (encriptado)',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], ChatEntity.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre del usuario (encriptado)',
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatEntity.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del chat',
        default: 'active',
    }),
    __metadata("design:type", String)
], ChatEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Última actividad',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], ChatEntity.prototype, "lastActivity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Contexto actual de la conversación',
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatEntity.prototype, "currentContext", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], ChatEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], ChatEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chat_detail_entity_1.ChatDetailEntity, (detail) => detail.chat),
    __metadata("design:type", Array)
], ChatEntity.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => conversation_history_entity_1.ConversationHistoryEntity, (history) => history.chat),
    __metadata("design:type", Array)
], ChatEntity.prototype, "conversationHistory", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatEntity.prototype, "encryptSensitiveData", null);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatEntity.prototype, "decryptSensitiveData", null);
exports.ChatEntity = ChatEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'chats' })
], ChatEntity);
//# sourceMappingURL=chat.entity.js.map