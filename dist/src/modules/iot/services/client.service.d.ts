import { Repository } from 'typeorm';
import { ClientEntity } from '../entities';
import { CreateClientDto, UpdateClientDto } from '../dtos';
export declare class ClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<ClientEntity>);
    create(createClientDto: CreateClientDto): Promise<ClientEntity>;
    findAll(): Promise<ClientEntity[]>;
    findOne(id: number): Promise<ClientEntity>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<ClientEntity>;
    remove(id: number): Promise<void>;
    findByIdentification(identificationNumber: string): Promise<ClientEntity | null>;
    findBySector(sectorId: number): Promise<ClientEntity[]>;
}
