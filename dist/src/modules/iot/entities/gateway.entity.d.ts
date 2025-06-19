import { NodeEntity } from './node.entity';
export declare class GatewayEntity {
    id: number;
    name: string;
    macAddress: string;
    ipAddress: string;
    location: string;
    isActive: boolean;
    isOnline: boolean;
    createdAt: Date;
    updatedAt: Date;
    nodes: NodeEntity[];
}
