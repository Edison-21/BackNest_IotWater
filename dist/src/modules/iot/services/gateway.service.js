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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
let GatewayService = class GatewayService {
    constructor(gatewayRepository) {
        this.gatewayRepository = gatewayRepository;
    }
    async create(createGatewayDto) {
        try {
            const gateway = this.gatewayRepository.create(createGatewayDto);
            return await this.gatewayRepository.save(gateway);
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al crear el gateway');
        }
    }
    async findAll() {
        return await this.gatewayRepository.find({
            relations: ['nodes'],
        });
    }
    async findOne(id) {
        const gateway = await this.gatewayRepository.findOne({
            where: { id },
            relations: ['nodes'],
        });
        if (!gateway) {
            throw new common_1.NotFoundException(`Gateway con ID ${id} no encontrado`);
        }
        return gateway;
    }
    async update(id, updateGatewayDto) {
        const gateway = await this.findOne(id);
        Object.assign(gateway, updateGatewayDto);
        return await this.gatewayRepository.save(gateway);
    }
    async remove(id) {
        const gateway = await this.findOne(id);
        await this.gatewayRepository.remove(gateway);
    }
    async findByMacAddress(macAddress) {
        return await this.gatewayRepository.findOne({
            where: { macAddress },
            relations: ['nodes'],
        });
    }
};
exports.GatewayService = GatewayService;
exports.GatewayService = GatewayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.GatewayEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GatewayService);
//# sourceMappingURL=gateway.service.js.map