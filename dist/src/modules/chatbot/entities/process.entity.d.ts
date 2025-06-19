import { ChatDetailEntity } from './chat-detail.entity';
import { MessageResponseEntity } from './message-response.entity';
export declare class ProcessEntity {
    id: number;
    name: string;
    description: string;
    keywords: string;
    priority: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    chatDetails: ChatDetailEntity[];
    messageResponses: MessageResponseEntity[];
}
