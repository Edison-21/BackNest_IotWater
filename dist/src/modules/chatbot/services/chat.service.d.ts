import { Repository } from 'typeorm';
import { ChatEntity } from '../entities';
export declare class ChatService {
    private readonly chatRepository;
    constructor(chatRepository: Repository<ChatEntity>);
    findAll(): Promise<ChatEntity[]>;
    findOne(id: number): Promise<ChatEntity>;
}
