import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ConversationHistoryService } from '../services';

@ApiTags('Historial de Conversaciones')
@ApiBearerAuth()
@Controller('conversation-history')
export class ConversationHistoryController {
  constructor(private readonly conversationHistoryService: ConversationHistoryService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todo el historial de conversaciones' })
  findAll() {
    return this.conversationHistoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un historial de conversación por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.conversationHistoryService.findOne(id);
  }
}