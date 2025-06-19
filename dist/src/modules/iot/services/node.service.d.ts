import { Repository } from 'typeorm';
import { NodeEntity } from '../entities';
export declare class NodeService {
    private readonly nodeRepository;
    constructor(nodeRepository: Repository<NodeEntity>);
    findAll(): Promise<NodeEntity[]>;
    findOne(id: number): Promise<NodeEntity>;
}
