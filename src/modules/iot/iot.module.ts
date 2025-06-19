import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  GatewayEntity,
  NodeEntity,
  MeterEntity,
  ClientEntity,
  SectorEntity,
  ConsumptionEntity,
  CollectionEntity,
  ValveEntity,
} from './entities';
import {
  GatewayService,
  NodeService,
  MeterService,
  ClientService,
  SectorService,
  ConsumptionService,
  CollectionService,
  ValveService,
} from './services';
import {
  GatewayController,
  NodeController,
  MeterController,
  ClientController,
  SectorController,
  ConsumptionController,
  CollectionController,
  ValveController,
} from './controllers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GatewayEntity,
      NodeEntity,
      MeterEntity,
      ClientEntity,
      SectorEntity,
      ConsumptionEntity,
      CollectionEntity,
      ValveEntity,
    ]),
  ],
  providers: [
    GatewayService,
    NodeService,
    MeterService,
    ClientService,
    SectorService,
    ConsumptionService,
    CollectionService,
    ValveService,
  ],
  controllers: [
    GatewayController,
    NodeController,
    MeterController,
    ClientController,
    SectorController,
    ConsumptionController,
    CollectionController,
    ValveController,
  ],
  exports: [
    GatewayService,
    NodeService,
    MeterService,
    ClientService,
    SectorService,
    ConsumptionService,
    CollectionService,
    ValveService,
  ],
})
export class IotModule {}