import { ClientEntity } from './client.entity';
export declare class SectorEntity {
    id: number;
    name: string;
    code: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    clients: ClientEntity[];
}
