import { Repository } from 'typeorm';
import { ConsumptionEntity } from '../entities';
export declare class ConsumptionService {
    private readonly consumptionRepository;
    constructor(consumptionRepository: Repository<ConsumptionEntity>);
    findAll(): Promise<ConsumptionEntity[]>;
    findOne(id: number): Promise<ConsumptionEntity>;
}
