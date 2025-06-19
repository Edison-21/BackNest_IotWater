import { ProcessEntity } from './process.entity';
export declare class MessageResponseEntity {
    id: number;
    inputPattern: string;
    response: string;
    responseType: string;
    conditions: string;
    priority: number;
    isActive: boolean;
    processId: number;
    createdAt: Date;
    updatedAt: Date;
    process: ProcessEntity;
}
