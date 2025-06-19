import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollectionEntity } from '../entities';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(CollectionEntity)
    private readonly collectionRepository: Repository<CollectionEntity>,
  ) {}

  async findAll(): Promise<CollectionEntity[]> {
    return await this.collectionRepository.find({
      relations: ['client'],
    });
  }

  async findOne(id: number): Promise<CollectionEntity> {
    const collection = await this.collectionRepository.findOne({
      where: { id },
      relations: ['client'],
    });

    if (!collection) {
      throw new NotFoundException(`Recaudación con ID ${id} no encontrada`);
    }

    return collection;
  }
}