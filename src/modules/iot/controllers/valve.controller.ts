import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ValveService } from '../services';

@ApiTags('Válvulas')
@ApiBearerAuth()
@Controller('valves')
export class ValveController {
  constructor(private readonly valveService: ValveService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las válvulas' })
  findAll() {
    return this.valveService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una válvula por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.valveService.findOne(id);
  }
}