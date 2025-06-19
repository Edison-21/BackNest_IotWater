"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const services_1 = require("./services");
const controllers_1 = require("./controllers");
let IotModule = class IotModule {
};
exports.IotModule = IotModule;
exports.IotModule = IotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.GatewayEntity,
                entities_1.NodeEntity,
                entities_1.MeterEntity,
                entities_1.ClientEntity,
                entities_1.SectorEntity,
                entities_1.ConsumptionEntity,
                entities_1.CollectionEntity,
                entities_1.ValveEntity,
            ]),
        ],
        providers: [
            services_1.GatewayService,
            services_1.NodeService,
            services_1.MeterService,
            services_1.ClientService,
            services_1.SectorService,
            services_1.ConsumptionService,
            services_1.CollectionService,
            services_1.ValveService,
        ],
        controllers: [
            controllers_1.GatewayController,
            controllers_1.NodeController,
            controllers_1.MeterController,
            controllers_1.ClientController,
            controllers_1.SectorController,
            controllers_1.ConsumptionController,
            controllers_1.CollectionController,
            controllers_1.ValveController,
        ],
        exports: [
            services_1.GatewayService,
            services_1.NodeService,
            services_1.MeterService,
            services_1.ClientService,
            services_1.SectorService,
            services_1.ConsumptionService,
            services_1.CollectionService,
            services_1.ValveService,
        ],
    })
], IotModule);
//# sourceMappingURL=iot.module.js.map