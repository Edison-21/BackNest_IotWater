import { GatewayService } from '../services';
import { CreateGatewayDto, UpdateGatewayDto } from '../dtos';
export declare class GatewayController {
    private readonly gatewayService;
    constructor(gatewayService: GatewayService);
    create(createGatewayDto: CreateGatewayDto): Promise<import("../entities").GatewayEntity>;
    findAll(): Promise<import("../entities").GatewayEntity[]>;
    findOne(id: number): Promise<import("../entities").GatewayEntity>;
    update(id: number, updateGatewayDto: UpdateGatewayDto): Promise<import("../entities").GatewayEntity>;
    remove(id: number): Promise<void>;
    findByMacAddress(macAddress: string): Promise<import("../entities").GatewayEntity | null>;
}
