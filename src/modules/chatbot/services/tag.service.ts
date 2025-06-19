import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from '../entities';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find({
      relations: ['chatDetails'],
    });
  }

  async findOne(id: number): Promise<TagEntity> {
    const tag = await this.tagRepository.findOne({
      where: { id },
      relations: ['chatDetails'],
    });

    if (!tag) {
      throw new NotFoundException(`Etiqueta con ID ${id} no encontrada`);
    }

    return tag;
  }
}