import { Repository } from 'typeorm';
import { MeterEntity } from '../entities';
export declare class MeterService {
    private readonly meterRepository;
    constructor(meterRepository: Repository<MeterEntity>);
    findAll(): Promise<MeterEntity[]>;
    findOne(id: number): Promise<MeterEntity>;
}
