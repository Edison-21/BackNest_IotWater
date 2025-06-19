import { SectorService } from '../services';
export declare class SectorController {
    private readonly sectorService;
    constructor(sectorService: SectorService);
    findAll(): Promise<import("../entities").SectorEntity[]>;
    findOne(id: number): Promise<import("../entities").SectorEntity>;
}
