import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { NodeService } from '../services';

@ApiTags('Nodos')
@ApiBearerAuth()
@Controller('nodes')
export class NodeController {
  constructor(private readonly nodeService: NodeService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los nodos' })
  findAll() {
    return this.nodeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un nodo por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.nodeService.findOne(id);
  }
}