import { Repository } from 'typeorm';
import { ChatDetailEntity } from '../entities';
export declare class ChatDetailService {
    private readonly chatDetailRepository;
    constructor(chatDetailRepository: Repository<ChatDetailEntity>);
    findAll(): Promise<ChatDetailEntity[]>;
    findOne(id: number): Promise<ChatDetailEntity>;
}
