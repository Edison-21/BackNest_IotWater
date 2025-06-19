import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CollectionService } from '../services';

@ApiTags('Recaudaciones')
@ApiBearerAuth()
@Controller('collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las recaudaciones' })
  findAll() {
    return this.collectionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una recaudación por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.findOne(id);
  }
}