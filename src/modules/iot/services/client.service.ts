import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientEntity } from '../entities';
import { CreateClientDto, UpdateClientDto } from '../dtos';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    try {
      const client = this.clientRepository.create(createClientDto);
      const savedClient = await this.clientRepository.save(client);
      return await this.findOne(savedClient.id);
    } catch (error) {
      throw new BadRequestException('Error al crear el cliente');
    }
  }

  async findAll(): Promise<ClientEntity[]> {
    return await this.clientRepository.find({
      relations: ['sector', 'meters'],
    });
  }

  async findOne(id: number): Promise<ClientEntity> {
    const client = await this.clientRepository.findOne({
      where: { id },
      relations: ['sector', 'meters'],
    });

    if (!client) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }

    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<ClientEntity> {
    const client = await this.findOne(id);
    
    Object.assign(client, updateClientDto);
    await this.clientRepository.save(client);
    
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const client = await this.findOne(id);
    await this.clientRepository.remove(client);
  }

  async findByIdentification(identificationNumber: string): Promise<ClientEntity | null> {
    return await this.clientRepository.findOne({
      where: { identificationNumber },
      relations: ['sector', 'meters'],
    });
  }

  async findBySector(sectorId: number): Promise<ClientEntity[]> {
    return await this.clientRepository.find({
      where: { sectorId },
      relations: ['sector', 'meters'],
    });
  }
}