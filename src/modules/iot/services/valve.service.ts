import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ValveEntity } from '../entities';

@Injectable()
export class ValveService {
  constructor(
    @InjectRepository(ValveEntity)
    private readonly valveRepository: Repository<ValveEntity>,
  ) {}

  async findAll(): Promise<ValveEntity[]> {
    return await this.valveRepository.find({
      relations: ['meter'],
    });
  }

  async findOne(id: number): Promise<ValveEntity> {
    const valve = await this.valveRepository.findOne({
      where: { id },
      relations: ['meter'],
    });

    if (!valve) {
      throw new NotFoundException(`Válvula con ID ${id} no encontrada`);
    }

    return valve;
  }
}