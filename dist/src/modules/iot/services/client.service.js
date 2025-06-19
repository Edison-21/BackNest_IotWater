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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create(createClientDto) {
        try {
            const client = this.clientRepository.create(createClientDto);
            const savedClient = await this.clientRepository.save(client);
            return await this.findOne(savedClient.id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al crear el cliente');
        }
    }
    async findAll() {
        return await this.clientRepository.find({
            relations: ['sector', 'meters'],
        });
    }
    async findOne(id) {
        const client = await this.clientRepository.findOne({
            where: { id },
            relations: ['sector', 'meters'],
        });
        if (!client) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return client;
    }
    async update(id, updateClientDto) {
        const client = await this.findOne(id);
        Object.assign(client, updateClientDto);
        await this.clientRepository.save(client);
        return await this.findOne(id);
    }
    async remove(id) {
        const client = await this.findOne(id);
        await this.clientRepository.remove(client);
    }
    async findByIdentification(identificationNumber) {
        return await this.clientRepository.findOne({
            where: { identificationNumber },
            relations: ['sector', 'meters'],
        });
    }
    async findBySector(sectorId) {
        return await this.clientRepository.find({
            where: { sectorId },
            relations: ['sector', 'meters'],
        });
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.ClientEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientService);
//# sourceMappingURL=client.service.js.map