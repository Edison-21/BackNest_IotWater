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
exports.NodeEntity = void 0;
const typeorm_1 = require("typeorm");
const gateway_entity_1 = require("./gateway.entity");
const meter_entity_1 = require("./meter.entity");
let NodeEntity = class NodeEntity {
};
exports.NodeEntity = NodeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del nodo.',
    }),
    __metadata("design:type", Number)
], NodeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre del nodo',
        nullable: false,
    }),
    __metadata("design:type", String)
], NodeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Identificador único del nodo',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], NodeEntity.prototype, "nodeId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tipo de nodo (sensor, actuador, etc.)',
        nullable: false,
    }),
    __metadata("design:type", String)
], NodeEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Ubicación del nodo',
        nullable: true,
    }),
    __metadata("design:type", String)
], NodeEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del nodo',
        default: true,
    }),
    __metadata("design:type", Boolean)
], NodeEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado de conexión del nodo',
        default: false,
    }),
    __metadata("design:type", Boolean)
], NodeEntity.prototype, "isOnline", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'gateway_id',
        comment: 'ID del gateway al que pertenece',
    }),
    __metadata("design:type", Number)
], NodeEntity.prototype, "gatewayId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], NodeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], NodeEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gateway_entity_1.GatewayEntity, (gateway) => gateway.nodes),
    (0, typeorm_1.JoinColumn)({ name: 'gateway_id' }),
    __metadata("design:type", gateway_entity_1.GatewayEntity)
], NodeEntity.prototype, "gateway", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => meter_entity_1.MeterEntity, (meter) => meter.node),
    __metadata("design:type", Array)
], NodeEntity.prototype, "meters", void 0);
exports.NodeEntity = NodeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'nodes' })
], NodeEntity);
//# sourceMappingURL=node.entity.js.map