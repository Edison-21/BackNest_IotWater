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
exports.ConsumptionEntity = void 0;
const typeorm_1 = require("typeorm");
const meter_entity_1 = require("./meter.entity");
let ConsumptionEntity = class ConsumptionEntity {
};
exports.ConsumptionEntity = ConsumptionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del consumo.',
    }),
    __metadata("design:type", Number)
], ConsumptionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Lectura actual del medidor',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], ConsumptionEntity.prototype, "currentReading", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Lectura anterior del medidor',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], ConsumptionEntity.prototype, "previousReading", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Consumo calculado',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], ConsumptionEntity.prototype, "consumption", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Fecha de la lectura',
        type: 'timestamp',
        nullable: false,
    }),
    __metadata("design:type", Date)
], ConsumptionEntity.prototype, "readingDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Período de facturación (YYYY-MM)',
        nullable: false,
    }),
    __metadata("design:type", String)
], ConsumptionEntity.prototype, "billingPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tipo de lectura (manual, automática)',
        nullable: false,
        default: 'automatic',
    }),
    __metadata("design:type", String)
], ConsumptionEntity.prototype, "readingType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meter_id',
        comment: 'ID del medidor',
    }),
    __metadata("design:type", Number)
], ConsumptionEntity.prototype, "meterId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], ConsumptionEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => meter_entity_1.MeterEntity, (meter) => meter.consumptions),
    (0, typeorm_1.JoinColumn)({ name: 'meter_id' }),
    __metadata("design:type", meter_entity_1.MeterEntity)
], ConsumptionEntity.prototype, "meter", void 0);
exports.ConsumptionEntity = ConsumptionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'consumptions' })
], ConsumptionEntity);
//# sourceMappingURL=consumption.entity.js.map