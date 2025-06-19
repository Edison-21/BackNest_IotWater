import { Repository } from 'typeorm';
import { MessageResponseEntity } from '../entities';
export declare class MessageResponseService {
    private readonly messageResponseRepository;
    constructor(messageResponseRepository: Repository<MessageResponseEntity>);
    findAll(): Promise<MessageResponseEntity[]>;
    findOne(id: number): Promise<MessageResponseEntity>;
}
