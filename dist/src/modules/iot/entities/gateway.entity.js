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
exports.GatewayEntity = void 0;
const typeorm_1 = require("typeorm");
const node_entity_1 = require("./node.entity");
let GatewayEntity = class GatewayEntity {
};
exports.GatewayEntity = GatewayEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del gateway.',
    }),
    __metadata("design:type", Number)
], GatewayEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre del gateway',
        nullable: false,
    }),
    __metadata("design:type", String)
], GatewayEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Dirección MAC del gateway',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], GatewayEntity.prototype, "macAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Dirección IP del gateway',
        nullable: true,
    }),
    __metadata("design:type", String)
], GatewayEntity.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Ubicación del gateway',
        nullable: true,
    }),
    __metadata("design:type", String)
], GatewayEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del gateway',
        default: true,
    }),
    __metadata("design:type", Boolean)
], GatewayEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado de conexión del gateway',
        default: false,
    }),
    __metadata("design:type", Boolean)
], GatewayEntity.prototype, "isOnline", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], GatewayEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], GatewayEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => node_entity_1.NodeEntity, (node) => node.gateway),
    __metadata("design:type", Array)
], GatewayEntity.prototype, "nodes", void 0);
exports.GatewayEntity = GatewayEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'gateways' })
], GatewayEntity);
//# sourceMappingURL=gateway.entity.js.map