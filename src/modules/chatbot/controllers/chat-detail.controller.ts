import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ChatDetailService } from '../services';

@ApiTags('Detalles de Chat')
@ApiBearerAuth()
@Controller('chat-details')
export class ChatDetailController {
  constructor(private readonly chatDetailService: ChatDetailService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los detalles de chat' })
  findAll() {
    return this.chatDetailService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un detalle de chat por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.chatDetailService.findOne(id);
  }
}