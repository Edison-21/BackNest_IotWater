import { MeterService } from '../services';
export declare class MeterController {
    private readonly meterService;
    constructor(meterService: MeterService);
    findAll(): Promise<import("../entities").MeterEntity[]>;
    findOne(id: number): Promise<import("../entities").MeterEntity>;
}
