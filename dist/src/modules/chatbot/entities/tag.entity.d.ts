import { ChatDetailEntity } from './chat-detail.entity';
export declare class TagEntity {
    id: number;
    name: string;
    color: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    chatDetails: ChatDetailEntity[];
}
