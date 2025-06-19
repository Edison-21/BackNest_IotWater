import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { MessageResponseService } from '../services';

@ApiTags('Respuestas de Mensajes')
@ApiBearerAuth()
@Controller('message-responses')
export class MessageResponseController {
  constructor(private readonly messageResponseService: MessageResponseService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las respuestas de mensajes' })
  findAll() {
    return this.messageResponseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una respuesta de mensaje por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.messageResponseService.findOne(id);
  }
}