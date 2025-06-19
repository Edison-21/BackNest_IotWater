import { ChatEntity } from './chat.entity';
import { ProcessEntity } from './process.entity';
import { TagEntity } from './tag.entity';
export declare class ChatDetailEntity {
    id: number;
    userMessage: string;
    botResponse: string;
    messageType: string;
    status: string;
    responseTime: number;
    chatId: number;
    processId: number;
    createdAt: Date;
    chat: ChatEntity;
    process: ProcessEntity;
    tags: TagEntity[];
}
