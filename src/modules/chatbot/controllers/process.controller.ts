import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ProcessService } from '../services';

@ApiTags('Procesos')
@ApiBearerAuth()
@Controller('processes')
export class ProcessController {
  constructor(private readonly processService: ProcessService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los procesos' })
  findAll() {
    return this.processService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proceso por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.processService.findOne(id);
  }
}