export declare class CreateGatewayDto {
    name: string;
    macAddress: string;
    ipAddress?: string;
    location?: string;
}
export declare class UpdateGatewayDto {
    name?: string;
    ipAddress?: string;
    location?: string;
    isActive?: boolean;
    isOnline?: boolean;
}
