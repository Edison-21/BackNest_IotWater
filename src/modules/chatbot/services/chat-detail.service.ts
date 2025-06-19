import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatDetailEntity } from '../entities';

@Injectable()
export class ChatDetailService {
  constructor(
    @InjectRepository(ChatDetailEntity)
    private readonly chatDetailRepository: Repository<ChatDetailEntity>,
  ) {}

  async findAll(): Promise<ChatDetailEntity[]> {
    return await this.chatDetailRepository.find({
      relations: ['chat', 'process', 'tags'],
    });
  }

  async findOne(id: number): Promise<ChatDetailEntity> {
    const chatDetail = await this.chatDetailRepository.findOne({
      where: { id },
      relations: ['chat', 'process', 'tags'],
    });

    if (!chatDetail) {
      throw new NotFoundException(`Detalle de chat con ID ${id} no encontrado`);
    }

    return chatDetail;
  }
}