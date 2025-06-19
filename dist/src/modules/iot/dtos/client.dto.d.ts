export declare class CreateClientDto {
    name: string;
    lastName: string;
    identificationNumber: string;
    identificationType: string;
    email?: string;
    phone?: string;
    address?: string;
    sectorId: number;
}
export declare class UpdateClientDto {
    name?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    isActive?: boolean;
    sectorId?: number;
}
export declare class ClientResponseDto {
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
}
