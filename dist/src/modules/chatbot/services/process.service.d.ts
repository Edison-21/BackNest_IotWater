import { Repository } from 'typeorm';
import { ProcessEntity } from '../entities';
export declare class ProcessService {
    private readonly processRepository;
    constructor(processRepository: Repository<ProcessEntity>);
    findAll(): Promise<ProcessEntity[]>;
    findOne(id: number): Promise<ProcessEntity>;
}
