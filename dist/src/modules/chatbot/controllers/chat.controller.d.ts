import { ChatService } from '../services';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    findAll(): Promise<import("../entities").ChatEntity[]>;
    findOne(id: number): Promise<import("../entities").ChatEntity>;
}
