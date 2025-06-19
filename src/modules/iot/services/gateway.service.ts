import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GatewayEntity } from '../entities';
import { CreateGatewayDto, UpdateGatewayDto } from '../dtos';

@Injectable()
export class GatewayService {
  constructor(
    @InjectRepository(GatewayEntity)
    private readonly gatewayRepository: Repository<GatewayEntity>,
  ) {}

  async create(createGatewayDto: CreateGatewayDto): Promise<GatewayEntity> {
    try {
      const gateway = this.gatewayRepository.create(createGatewayDto);
      return await this.gatewayRepository.save(gateway);
    } catch (error) {
      throw new BadRequestException('Error al crear el gateway');
    }
  }

  async findAll(): Promise<GatewayEntity[]> {
    return await this.gatewayRepository.find({
      relations: ['nodes'],
    });
  }

  async findOne(id: number): Promise<GatewayEntity> {
    const gateway = await this.gatewayRepository.findOne({
      where: { id },
      relations: ['nodes'],
    });

    if (!gateway) {
      throw new NotFoundException(`Gateway con ID ${id} no encontrado`);
    }

    return gateway;
  }

  async update(id: number, updateGatewayDto: UpdateGatewayDto): Promise<GatewayEntity> {
    const gateway = await this.findOne(id);
    
    Object.assign(gateway, updateGatewayDto);
    return await this.gatewayRepository.save(gateway);
  }

  async remove(id: number): Promise<void> {
    const gateway = await this.findOne(id);
    await this.gatewayRepository.remove(gateway);
  }

  async findByMacAddress(macAddress: string): Promise<GatewayEntity | null> {
    return await this.gatewayRepository.findOne({
      where: { macAddress },
      relations: ['nodes'],
    });
  }
}