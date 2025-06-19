import { Repository } from 'typeorm';
import { SectorEntity } from '../entities';
export declare class SectorService {
    private readonly sectorRepository;
    constructor(sectorRepository: Repository<SectorEntity>);
    findAll(): Promise<SectorEntity[]>;
    findOne(id: number): Promise<SectorEntity>;
}
