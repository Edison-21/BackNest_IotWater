import { ChatDetailEntity } from './chat-detail.entity';
import { ConversationHistoryEntity } from './conversation-history.entity';
export declare class ChatEntity {
    id: number;
    phoneNumber: string;
    userName: string;
    status: string;
    lastActivity: Date;
    currentContext: string;
    createdAt: Date;
    updatedAt: Date;
    details: ChatDetailEntity[];
    conversationHistory: ConversationHistoryEntity[];
    decryptedPhoneNumber?: string;
    decryptedUserName?: string;
    encryptSensitiveData(): void;
    decryptSensitiveData(): void;
}
