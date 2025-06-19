import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProcessEntity } from '../entities';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(ProcessEntity)
    private readonly processRepository: Repository<ProcessEntity>,
  ) {}

  async findAll(): Promise<ProcessEntity[]> {
    return await this.processRepository.find({
      relations: ['chatDetails', 'messageResponses'],
    });
  }

  async findOne(id: number): Promise<ProcessEntity> {
    const process = await this.processRepository.findOne({
      where: { id },
      relations: ['chatDetails', 'messageResponses'],
    });

    if (!process) {
      throw new NotFoundException(`Proceso con ID ${id} no encontrado`);
    }

    return process;
  }
}