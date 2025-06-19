import { ClientService } from '../services';
import { CreateClientDto, UpdateClientDto } from '../dtos';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    create(createClientDto: CreateClientDto): Promise<import("../entities").ClientEntity>;
    findAll(): Promise<import("../entities").ClientEntity[]>;
    findOne(id: number): Promise<import("../entities").ClientEntity>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<import("../entities").ClientEntity>;
    remove(id: number): Promise<void>;
    findByIdentification(identificationNumber: string): Promise<import("../entities").ClientEntity | null>;
    findBySector(sectorId: number): Promise<import("../entities").ClientEntity[]>;
}
