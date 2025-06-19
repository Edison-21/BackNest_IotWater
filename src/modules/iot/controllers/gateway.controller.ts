import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GatewayService } from '../services';
import { CreateGatewayDto, UpdateGatewayDto } from '../dtos';

@ApiTags('Gateways')
@ApiBearerAuth()
@Controller('gateways')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo gateway' })
  create(@Body() createGatewayDto: CreateGatewayDto) {
    return this.gatewayService.create(createGatewayDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los gateways' })
  findAll() {
    return this.gatewayService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un gateway por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gatewayService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un gateway' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateGatewayDto: UpdateGatewayDto) {
    return this.gatewayService.update(id, updateGatewayDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un gateway' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gatewayService.remove(id);
  }

  @Get('mac/:macAddress')
  @ApiOperation({ summary: 'Buscar gateway por dirección MAC' })
  findByMacAddress(@Param('macAddress') macAddress: string) {
    return this.gatewayService.findByMacAddress(macAddress);
  }
}