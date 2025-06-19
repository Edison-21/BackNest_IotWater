import { MeterEntity } from './meter.entity';
export declare class ValveEntity {
    id: number;
    name: string;
    type: string;
    isOpen: boolean;
    isActive: boolean;
    location: string;
    lastOperationDate: Date;
    meterId: number;
    createdAt: Date;
    updatedAt: Date;
    meter: MeterEntity;
}
