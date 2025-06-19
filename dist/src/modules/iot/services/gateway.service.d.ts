import { Repository } from 'typeorm';
import { GatewayEntity } from '../entities';
import { CreateGatewayDto, UpdateGatewayDto } from '../dtos';
export declare class GatewayService {
    private readonly gatewayRepository;
    constructor(gatewayRepository: Repository<GatewayEntity>);
    create(createGatewayDto: CreateGatewayDto): Promise<GatewayEntity>;
    findAll(): Promise<GatewayEntity[]>;
    findOne(id: number): Promise<GatewayEntity>;
    update(id: number, updateGatewayDto: UpdateGatewayDto): Promise<GatewayEntity>;
    remove(id: number): Promise<void>;
    findByMacAddress(macAddress: string): Promise<GatewayEntity | null>;
}
