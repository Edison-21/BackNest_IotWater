import { GatewayEntity } from './gateway.entity';
import { MeterEntity } from './meter.entity';
export declare class NodeEntity {
    id: number;
    name: string;
    nodeId: string;
    type: string;
    location: string;
    isActive: boolean;
    isOnline: boolean;
    gatewayId: number;
    createdAt: Date;
    updatedAt: Date;
    gateway: GatewayEntity;
    meters: MeterEntity[];
}
