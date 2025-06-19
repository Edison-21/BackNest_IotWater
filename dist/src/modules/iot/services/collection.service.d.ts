import { Repository } from 'typeorm';
import { CollectionEntity } from '../entities';
export declare class CollectionService {
    private readonly collectionRepository;
    constructor(collectionRepository: Repository<CollectionEntity>);
    findAll(): Promise<CollectionEntity[]>;
    findOne(id: number): Promise<CollectionEntity>;
}
