import { ValveService } from '../services';
export declare class ValveController {
    private readonly valveService;
    constructor(valveService: ValveService);
    findAll(): Promise<import("../entities").ValveEntity[]>;
    findOne(id: number): Promise<import("../entities").ValveEntity>;
}
