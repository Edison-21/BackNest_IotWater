import { Repository } from 'typeorm';
import { ValveEntity } from '../entities';
export declare class ValveService {
    private readonly valveRepository;
    constructor(valveRepository: Repository<ValveEntity>);
    findAll(): Promise<ValveEntity[]>;
    findOne(id: number): Promise<ValveEntity>;
}
