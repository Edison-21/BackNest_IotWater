import { ClientEntity } from './client.entity';
export declare class CollectionEntity {
    id: number;
    amount: number;
    paidAmount: number;
    balance: number;
    dueDate: Date;
    paymentDate: Date;
    status: string;
    billingPeriod: string;
    paymentMethod: string;
    paymentReference: string;
    clientId: number;
    createdAt: Date;
    updatedAt: Date;
    client: ClientEntity;
}
