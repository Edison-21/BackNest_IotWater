import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { MeterService } from '../services';

@ApiTags('Medidores')
@ApiBearerAuth()
@Controller('meters')
export class MeterController {
  constructor(private readonly meterService: MeterService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los medidores' })
  findAll() {
    return this.meterService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un medidor por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.meterService.findOne(id);
  }
}