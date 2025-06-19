import { MeterEntity } from './meter.entity';
export declare class ConsumptionEntity {
    id: number;
    currentReading: number;
    previousReading: number;
    consumption: number;
    readingDate: Date;
    billingPeriod: string;
    readingType: string;
    meterId: number;
    createdAt: Date;
    meter: MeterEntity;
}
