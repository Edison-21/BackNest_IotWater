import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeterEntity } from '../entities';

@Injectable()
export class MeterService {
  constructor(
    @InjectRepository(MeterEntity)
    private readonly meterRepository: Repository<MeterEntity>,
  ) {}

  async findAll(): Promise<MeterEntity[]> {
    return await this.meterRepository.find({
      relations: ['node', 'client', 'consumptions', 'valves'],
    });
  }

  async findOne(id: number): Promise<MeterEntity> {
    const meter = await this.meterRepository.findOne({
      where: { id },
      relations: ['node', 'client', 'consumptions', 'valves'],
    });

    if (!meter) {
      throw new NotFoundException(`Medidor con ID ${id} no encontrado`);
    }

    return meter;
  }
}