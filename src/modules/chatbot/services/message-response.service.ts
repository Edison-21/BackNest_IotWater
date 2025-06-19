import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageResponseEntity } from '../entities';

@Injectable()
export class MessageResponseService {
  constructor(
    @InjectRepository(MessageResponseEntity)
    private readonly messageResponseRepository: Repository<MessageResponseEntity>,
  ) {}

  async findAll(): Promise<MessageResponseEntity[]> {
    return await this.messageResponseRepository.find({
      relations: ['process'],
    });
  }

  async findOne(id: number): Promise<MessageResponseEntity> {
    const messageResponse = await this.messageResponseRepository.findOne({
      where: { id },
      relations: ['process'],
    });

    if (!messageResponse) {
      throw new NotFoundException(`Respuesta de mensaje con ID ${id} no encontrada`);
    }

    return messageResponse;
  }
}