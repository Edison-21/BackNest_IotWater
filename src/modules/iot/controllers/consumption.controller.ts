import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ConsumptionService } from '../services';

@ApiTags('Consumos')
@ApiBearerAuth()
@Controller('consumptions')
export class ConsumptionController {
  constructor(private readonly consumptionService: ConsumptionService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los consumos' })
  findAll() {
    return this.consumptionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un consumo por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.consumptionService.findOne(id);
  }
}