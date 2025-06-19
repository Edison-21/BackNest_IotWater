import { NodeEntity } from './node.entity';
import { ClientEntity } from './client.entity';
import { ConsumptionEntity } from './consumption.entity';
import { ValveEntity } from './valve.entity';
export declare class MeterEntity {
    id: number;
    serialNumber: string;
    model: string;
    brand: string;
    location: string;
    installationDate: Date;
    initialReading: number;
    isActive: boolean;
    nodeId: number;
    clientId: number;
    createdAt: Date;
    updatedAt: Date;
    node: NodeEntity;
    client: ClientEntity;
    consumptions: ConsumptionEntity[];
    valves: ValveEntity[];
}
