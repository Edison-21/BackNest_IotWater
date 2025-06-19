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
exports.MeterEntity = void 0;
const typeorm_1 = require("typeorm");
const node_entity_1 = require("./node.entity");
const client_entity_1 = require("./client.entity");
const consumption_entity_1 = require("./consumption.entity");
const valve_entity_1 = require("./valve.entity");
let MeterEntity = class MeterEntity {
};
exports.MeterEntity = MeterEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del medidor.',
    }),
    __metadata("design:type", Number)
], MeterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Número de serie del medidor',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], MeterEntity.prototype, "serialNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Modelo del medidor',
        nullable: false,
    }),
    __metadata("design:type", String)
], MeterEntity.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Marca del medidor',
        nullable: false,
    }),
    __metadata("design:type", String)
], MeterEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Ubicación del medidor',
        nullable: true,
    }),
    __metadata("design:type", String)
], MeterEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Fecha de instalación',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], MeterEntity.prototype, "installationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Lectura inicial del medidor',
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], MeterEntity.prototype, "initialReading", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del medidor',
        default: true,
    }),
    __metadata("design:type", Boolean)
], MeterEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'node_id',
        comment: 'ID del nodo al que pertenece',
    }),
    __metadata("design:type", Number)
], MeterEntity.prototype, "nodeId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'client_id',
        comment: 'ID del cliente al que pertenece',
    }),
    __metadata("design:type", Number)
], MeterEntity.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], MeterEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], MeterEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => node_entity_1.NodeEntity, (node) => node.meters),
    (0, typeorm_1.JoinColumn)({ name: 'node_id' }),
    __metadata("design:type", node_entity_1.NodeEntity)
], MeterEntity.prototype, "node", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.ClientEntity, (client) => client.meters),
    (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
    __metadata("design:type", client_entity_1.ClientEntity)
], MeterEntity.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consumption_entity_1.ConsumptionEntity, (consumption) => consumption.meter),
    __metadata("design:type", Array)
], MeterEntity.prototype, "consumptions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => valve_entity_1.ValveEntity, (valve) => valve.meter),
    __metadata("design:type", Array)
], MeterEntity.prototype, "valves", void 0);
exports.MeterEntity = MeterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'meters' })
], MeterEntity);
//# sourceMappingURL=meter.entity.js.map