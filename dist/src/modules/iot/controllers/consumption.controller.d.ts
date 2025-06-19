import { ConsumptionService } from '../services';
export declare class ConsumptionController {
    private readonly consumptionService;
    constructor(consumptionService: ConsumptionService);
    findAll(): Promise<import("../entities").ConsumptionEntity[]>;
    findOne(id: number): Promise<import("../entities").ConsumptionEntity>;
}
