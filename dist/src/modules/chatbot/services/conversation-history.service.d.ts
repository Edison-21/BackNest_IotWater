import { Repository } from 'typeorm';
import { ConversationHistoryEntity } from '../entities';
export declare class ConversationHistoryService {
    private readonly conversationHistoryRepository;
    constructor(conversationHistoryRepository: Repository<ConversationHistoryEntity>);
    findAll(): Promise<ConversationHistoryEntity[]>;
    findOne(id: number): Promise<ConversationHistoryEntity>;
}
