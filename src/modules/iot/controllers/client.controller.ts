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
import { ClientService } from '../services';
import { CreateClientDto, UpdateClientDto, ClientResponseDto } from '../dtos';

@ApiTags('Clientes')
@ApiBearerAuth()
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente creado exitosamente', type: ClientResponseDto })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los clientes' })
  @ApiResponse({ status: 200, description: 'Lista de clientes', type: [ClientResponseDto] })
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un cliente por ID' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado', type: ClientResponseDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un cliente' })
  @ApiResponse({ status: 200, description: 'Cliente actualizado exitosamente', type: ClientResponseDto })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un cliente' })
  @ApiResponse({ status: 200, description: 'Cliente eliminado exitosamente' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.remove(id);
  }

  @Get('identification/:identificationNumber')
  @ApiOperation({ summary: 'Buscar cliente por número de identificación' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado', type: ClientResponseDto })
  findByIdentification(@Param('identificationNumber') identificationNumber: string) {
    return this.clientService.findByIdentification(identificationNumber);
  }

  @Get('sector/:sectorId')
  @ApiOperation({ summary: 'Obtener clientes por sector' })
  @ApiResponse({ status: 200, description: 'Lista de clientes del sector', type: [ClientResponseDto] })
  findBySector(@Param('sectorId', ParseIntPipe) sectorId: number) {
    return this.clientService.findBySector(sectorId);
  }
}