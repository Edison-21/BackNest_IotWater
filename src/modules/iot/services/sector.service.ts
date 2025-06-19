import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SectorEntity } from '../entities';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(SectorEntity)
    private readonly sectorRepository: Repository<SectorEntity>,
  ) {}

  async findAll(): Promise<SectorEntity[]> {
    return await this.sectorRepository.find({
      relations: ['clients'],
    });
  }

  async findOne(id: number): Promise<SectorEntity> {
    const sector = await this.sectorRepository.findOne({
      where: { id },
      relations: ['clients'],
    });

    if (!sector) {
      throw new NotFoundException(`Sector con ID ${id} no encontrado`);
    }

    return sector;
  }
}