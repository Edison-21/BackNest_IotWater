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
exports.NodeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
let NodeService = class NodeService {
    constructor(nodeRepository) {
        this.nodeRepository = nodeRepository;
    }
    async findAll() {
        return await this.nodeRepository.find({
            relations: ['gateway', 'meters'],
        });
    }
    async findOne(id) {
        const node = await this.nodeRepository.findOne({
            where: { id },
            relations: ['gateway', 'meters'],
        });
        if (!node) {
            throw new common_1.NotFoundException(`Nodo con ID ${id} no encontrado`);
        }
        return node;
    }
};
exports.NodeService = NodeService;
exports.NodeService = NodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.NodeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NodeService);
//# sourceMappingURL=node.service.js.map