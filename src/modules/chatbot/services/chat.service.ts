import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatEntity } from '../entities';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
  ) {}

  async findAll(): Promise<ChatEntity[]> {
    return await this.chatRepository.find({
      relations: ['details', 'conversationHistory'],
    });
  }

  async findOne(id: number): Promise<ChatEntity> {
    const chat = await this.chatRepository.findOne({
      where: { id },
      relations: ['details', 'conversationHistory'],
    });

    if (!chat) {
      throw new NotFoundException(`Chat con ID ${id} no encontrado`);
    }

    return chat;
  }
}