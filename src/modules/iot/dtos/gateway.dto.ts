import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsIP } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGatewayDto {
  @ApiProperty({
    description: 'Nombre del gateway',
    example: 'Gateway Principal',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Dirección MAC del gateway',
    example: '00:1B:44:11:3A:B7',
  })
  @IsString()
  @IsNotEmpty()
  macAddress: string;

  @ApiProperty({
    description: 'Dirección IP del gateway',
    example: '192.168.1.100',
    required: false,
  })
  @IsIP()
  @IsOptional()
  ipAddress?: string;

  @ApiProperty({
    description: 'Ubicación del gateway',
    example: 'Edificio Principal - Planta Baja',
    required: false,
  })
  @IsString()
  @IsOptional()
  location?: string;
}

export class UpdateGatewayDto {
  @ApiProperty({
    description: 'Nombre del gateway',
    example: 'Gateway Principal',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Dirección IP del gateway',
    example: '192.168.1.100',
    required: false,
  })
  @IsIP()
  @IsOptional()
  ipAddress?: string;

  @ApiProperty({
    description: 'Ubicación del gateway',
    example: 'Edificio Principal - Planta Baja',
    required: false,
  })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({
    description: 'Estado del gateway',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({
    description: 'Estado de conexión del gateway',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isOnline?: boolean;
}