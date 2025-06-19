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
exports.ValveEntity = void 0;
const typeorm_1 = require("typeorm");
const meter_entity_1 = require("./meter.entity");
let ValveEntity = class ValveEntity {
};
exports.ValveEntity = ValveEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria de la válvula.',
    }),
    __metadata("design:type", Number)
], ValveEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre de la válvula',
        nullable: false,
    }),
    __metadata("design:type", String)
], ValveEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tipo de válvula',
        nullable: false,
    }),
    __metadata("design:type", String)
], ValveEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado de la válvula (abierta/cerrada)',
        default: true,
    }),
    __metadata("design:type", Boolean)
], ValveEntity.prototype, "isOpen", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado de la válvula',
        default: true,
    }),
    __metadata("design:type", Boolean)
], ValveEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Ubicación de la válvula',
        nullable: true,
    }),
    __metadata("design:type", String)
], ValveEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Fecha de la última operación',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], ValveEntity.prototype, "lastOperationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meter_id',
        comment: 'ID del medidor asociado',
    }),
    __metadata("design:type", Number)
], ValveEntity.prototype, "meterId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], ValveEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], ValveEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => meter_entity_1.MeterEntity, (meter) => meter.valves),
    (0, typeorm_1.JoinColumn)({ name: 'meter_id' }),
    __metadata("design:type", meter_entity_1.MeterEntity)
], ValveEntity.prototype, "meter", void 0);
exports.ValveEntity = ValveEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'valves' })
], ValveEntity);
//# sourceMappingURL=valve.entity.js.map