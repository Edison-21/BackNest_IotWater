import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumptionEntity } from '../entities';

@Injectable()
export class ConsumptionService {
  constructor(
    @InjectRepository(ConsumptionEntity)
    private readonly consumptionRepository: Repository<ConsumptionEntity>,
  ) {}

  async findAll(): Promise<ConsumptionEntity[]> {
    return await this.consumptionRepository.find({
      relations: ['meter'],
    });
  }

  async findOne(id: number): Promise<ConsumptionEntity> {
    const consumption = await this.consumptionRepository.findOne({
      where: { id },
      relations: ['meter'],
    });

    if (!consumption) {
      throw new NotFoundException(`Consumo con ID ${id} no encontrado`);
    }

    return consumption;
  }
}