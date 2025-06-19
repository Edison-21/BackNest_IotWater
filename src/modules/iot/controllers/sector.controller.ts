import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { SectorService } from '../services';

@ApiTags('Sectores')
@ApiBearerAuth()
@Controller('sectors')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los sectores' })
  findAll() {
    return this.sectorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un sector por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sectorService.findOne(id);
  }
}