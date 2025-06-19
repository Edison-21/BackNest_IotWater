import { ProcessService } from '../services';
export declare class ProcessController {
    private readonly processService;
    constructor(processService: ProcessService);
    findAll(): Promise<import("../entities").ProcessEntity[]>;
    findOne(id: number): Promise<import("../entities").ProcessEntity>;
}
