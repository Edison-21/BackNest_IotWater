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
exports.TagEntity = void 0;
const typeorm_1 = require("typeorm");
const chat_detail_entity_1 = require("./chat-detail.entity");
let TagEntity = class TagEntity {
};
exports.TagEntity = TagEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria de la etiqueta.',
    }),
    __metadata("design:type", Number)
], TagEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre de la etiqueta',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], TagEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Color de la etiqueta',
        nullable: true,
        default: '#007bff',
    }),
    __metadata("design:type", String)
], TagEntity.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Descripción de la etiqueta',
        nullable: true,
    }),
    __metadata("design:type", String)
], TagEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado de la etiqueta',
        default: true,
    }),
    __metadata("design:type", Boolean)
], TagEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], TagEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], TagEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => chat_detail_entity_1.ChatDetailEntity, (detail) => detail.tags),
    __metadata("design:type", Array)
], TagEntity.prototype, "chatDetails", void 0);
exports.TagEntity = TagEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tags' })
], TagEntity);
//# sourceMappingURL=tag.entity.js.map