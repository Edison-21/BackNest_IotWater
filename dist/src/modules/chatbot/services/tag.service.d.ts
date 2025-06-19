import { Repository } from 'typeorm';
import { TagEntity } from '../entities';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<TagEntity>);
    findAll(): Promise<TagEntity[]>;
    findOne(id: number): Promise<TagEntity>;
}
