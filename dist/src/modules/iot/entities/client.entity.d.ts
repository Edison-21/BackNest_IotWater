import { SectorEntity } from './sector.entity';
import { MeterEntity } from './meter.entity';
import { CollectionEntity } from './collection.entity';
export declare class ClientEntity {
    id: number;
    name: string;
    lastName: string;
    identificationNumber: string;
    identificationType: string;
    email: string;
    phone: string;
    address: string;
    isActive: boolean;
    sectorId: number;
    createdAt: Date;
    updatedAt: Date;
    sector: SectorEntity;
    meters: MeterEntity[];
    collections: CollectionEntity[];
    decryptedName?: string;
    decryptedLastName?: string;
    decryptedIdentificationNumber?: string;
    decryptedEmail?: string;
    decryptedPhone?: string;
    decryptedAddress?: string;
    encryptSensitiveData(): void;
    decryptSensitiveData(): void;
}
