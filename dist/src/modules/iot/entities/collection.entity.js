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
exports.CollectionEntity = void 0;
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
let CollectionEntity = class CollectionEntity {
};
exports.CollectionEntity = CollectionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria de la recaudación.',
    }),
    __metadata("design:type", Number)
], CollectionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Monto de la factura',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], CollectionEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Monto pagado',
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], CollectionEntity.prototype, "paidAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Saldo pendiente',
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], CollectionEntity.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Fecha de vencimiento',
        type: 'date',
        nullable: false,
    }),
    __metadata("design:type", Date)
], CollectionEntity.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Fecha de pago',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], CollectionEntity.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del pago',
        nullable: false,
        default: 'pending',
    }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Período de facturación (YYYY-MM)',
        nullable: false,
    }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "billingPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Método de pago',
        nullable: true,
    }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Referencia de pago',
        nullable: true,
    }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "paymentReference", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'client_id',
        comment: 'ID del cliente',
    }),
    __metadata("design:type", Number)
], CollectionEntity.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], CollectionEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], CollectionEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.ClientEntity, (client) => client.collections),
    (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
    __metadata("design:type", client_entity_1.ClientEntity)
], CollectionEntity.prototype, "client", void 0);
exports.CollectionEntity = CollectionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'collections' })
], CollectionEntity);
//# sourceMappingURL=collection.entity.js.map