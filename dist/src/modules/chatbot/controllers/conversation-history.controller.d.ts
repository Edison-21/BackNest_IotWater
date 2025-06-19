import { ConversationHistoryService } from '../services';
export declare class ConversationHistoryController {
    private readonly conversationHistoryService;
    constructor(conversationHistoryService: ConversationHistoryService);
    findAll(): Promise<import("../entities").ConversationHistoryEntity[]>;
    findOne(id: number): Promise<import("../entities").ConversationHistoryEntity>;
}
