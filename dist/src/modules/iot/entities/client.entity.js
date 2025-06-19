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
exports.ClientEntity = void 0;
const typeorm_1 = require("typeorm");
const sector_entity_1 = require("./sector.entity");
const meter_entity_1 = require("./meter.entity");
const collection_entity_1 = require("./collection.entity");
const utils_1 = require("../../../shared/utils");
let ClientEntity = class ClientEntity {
    encryptSensitiveData() {
        if (this.name && !this.name.includes('U2FsdGVkX1')) {
            this.name = utils_1.EncryptionUtil.encrypt(this.name);
        }
        if (this.lastName && !this.lastName.includes('U2FsdGVkX1')) {
            this.lastName = utils_1.EncryptionUtil.encrypt(this.lastName);
        }
        if (this.identificationNumber && !this.identificationNumber.includes('U2FsdGVkX1')) {
            this.identificationNumber = utils_1.EncryptionUtil.encrypt(this.identificationNumber);
        }
        if (this.email && !this.email.includes('U2FsdGVkX1')) {
            this.email = utils_1.EncryptionUtil.encrypt(this.email);
        }
        if (this.phone && !this.phone.includes('U2FsdGVkX1')) {
            this.phone = utils_1.EncryptionUtil.encrypt(this.phone);
        }
        if (this.address && !this.address.includes('U2FsdGVkX1')) {
            this.address = utils_1.EncryptionUtil.encrypt(this.address);
        }
    }
    decryptSensitiveData() {
        this.decryptedName = utils_1.EncryptionUtil.decrypt(this.name);
        this.decryptedLastName = utils_1.EncryptionUtil.decrypt(this.lastName);
        this.decryptedIdentificationNumber = utils_1.EncryptionUtil.decrypt(this.identificationNumber);
        this.decryptedEmail = utils_1.EncryptionUtil.decrypt(this.email);
        this.decryptedPhone = utils_1.EncryptionUtil.decrypt(this.phone);
        this.decryptedAddress = utils_1.EncryptionUtil.decrypt(this.address);
    }
};
exports.ClientEntity = ClientEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        comment: 'Clave primaria del cliente.',
    }),
    __metadata("design:type", Number)
], ClientEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Nombre del cliente (encriptado)',
        nullable: false,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Apellido del cliente (encriptado)',
        nullable: false,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Número de identificación (encriptado)',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "identificationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Tipo de identificación',
        nullable: false,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "identificationType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Email del cliente (encriptado)',
        nullable: true,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Teléfono del cliente (encriptado)',
        nullable: true,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Dirección del cliente (encriptado)',
        nullable: true,
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Estado del cliente',
        default: true,
    }),
    __metadata("design:type", Boolean)
], ClientEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sector_id',
        comment: 'ID del sector al que pertenece',
    }),
    __metadata("design:type", Number)
], ClientEntity.prototype, "sectorId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], ClientEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        comment: 'Fecha de actualización',
    }),
    __metadata("design:type", Date)
], ClientEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sector_entity_1.SectorEntity, (sector) => sector.clients),
    (0, typeorm_1.JoinColumn)({ name: 'sector_id' }),
    __metadata("design:type", sector_entity_1.SectorEntity)
], ClientEntity.prototype, "sector", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => meter_entity_1.MeterEntity, (meter) => meter.client),
    __metadata("design:type", Array)
], ClientEntity.prototype, "meters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => collection_entity_1.CollectionEntity, (collection) => collection.client),
    __metadata("design:type", Array)
], ClientEntity.prototype, "collections", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientEntity.prototype, "encryptSensitiveData", null);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientEntity.prototype, "decryptSensitiveData", null);
exports.ClientEntity = ClientEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'clients' })
], ClientEntity);
//# sourceMappingURL=client.entity.js.map