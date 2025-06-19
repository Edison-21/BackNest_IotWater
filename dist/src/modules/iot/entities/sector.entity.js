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
exports.SectorEntity = void 0;
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
let SectorEntity = class SectorEntity {
};
exports.SectorEntity = SectorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del sector.',
    }),
    __metadata("design:type", Number)
], SectorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre del sector',
        nullable: false,
    }),
    __metadata("design:type", String)
], SectorEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Código del sector',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], SectorEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Descripción del sector',
        nullable: true,
    }),
    __metadata("design:type", String)
], SectorEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del sector',
        default: true,
    }),
    __metadata("design:type", Boolean)
], SectorEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], SectorEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], SectorEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => client_entity_1.ClientEntity, (client) => client.sector),
    __metadata("design:type", Array)
], SectorEntity.prototype, "clients", void 0);
exports.SectorEntity = SectorEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'sectors' })
], SectorEntity);
//# sourceMappingURL=sector.entity.js.map