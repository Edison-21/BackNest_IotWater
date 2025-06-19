import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConversationHistoryEntity } from '../entities';

@Injectable()
export class ConversationHistoryService {
  constructor(
    @InjectRepository(ConversationHistoryEntity)
    private readonly conversationHistoryRepository: Repository<ConversationHistoryEntity>,
  ) {}

  async findAll(): Promise<ConversationHistoryEntity[]> {
    return await this.conversationHistoryRepository.find({
      relations: ['chat'],
    });
  }

  async findOne(id: number): Promise<ConversationHistoryEntity> {
    const conversationHistory = await this.conversationHistoryRepository.findOne({
      where: { id },
      relations: ['chat'],
    });

    if (!conversationHistory) {
      throw new NotFoundException(`Historial de conversación con ID ${id} no encontrado`);
    }

    return conversationHistory;
  }
}