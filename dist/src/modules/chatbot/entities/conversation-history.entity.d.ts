import { ChatEntity } from './chat.entity';
export declare class ConversationHistoryEntity {
    id: number;
    message: string;
    participantType: string;
    metadata: string;
    sessionId: string;
    chatId: number;
    createdAt: Date;
    chat: ChatEntity;
    decryptedMessage?: string;
    decryptedMetadata?: string;
    encryptSensitiveData(): void;
    decryptSensitiveData(): void;
}
