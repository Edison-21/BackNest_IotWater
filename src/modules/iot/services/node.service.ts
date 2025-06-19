import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NodeEntity } from '../entities';

@Injectable()
export class NodeService {
  constructor(
    @InjectRepository(NodeEntity)
    private readonly nodeRepository: Repository<NodeEntity>,
  ) {}

  async findAll(): Promise<NodeEntity[]> {
    return await this.nodeRepository.find({
      relations: ['gateway', 'meters'],
    });
  }

  async findOne(id: number): Promise<NodeEntity> {
    const node = await this.nodeRepository.findOne({
      where: { id },
      relations: ['gateway', 'meters'],
    });

    if (!node) {
      throw new NotFoundException(`Nodo con ID ${id} no encontrado`);
    }

    return node;
  }
}