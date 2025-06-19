import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { NodeEntity } from './node.entity';
import { ClientEntity } from './client.entity';
import { ConsumptionEntity } from './consumption.entity';
import { ValveEntity } from './valve.entity';

@Entity({ name: 'meters' })
export class MeterEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del medidor.',
  })
  id: number;

  @Column({
    comment: 'Número de serie del medidor',
    nullable: false,
    unique: true,
  })
  serialNumber: string;

  @Column({
    comment: 'Modelo del medidor',
    nullable: false,
  })
  model: string;

  @Column({
    comment: 'Marca del medidor',
    nullable: false,
  })
  brand: string;

  @Column({
    comment: 'Ubicación del medidor',
    nullable: true,
  })
  location: string;

  @Column({
    comment: 'Fecha de instalación',
    type: 'date',
    nullable: true,
  })
  installationDate: Date;

  @Column({
    comment: 'Lectura inicial del medidor',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  initialReading: number;

  @Column({
    comment: 'Estado del medidor',
    default: true,
  })
  isActive: boolean;

  @Column({
    name: 'node_id',
    comment: 'ID del nodo al que pertenece',
  })
  nodeId: number;

  @Column({
    name: 'client_id',
    comment: 'ID del cliente al que pertenece',
  })
  clientId: number;

  @CreateDateColumn({
    name: 'created_at',
    comment: 'Fecha de creación',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    comment: 'Fecha de actualización',
  })
  updatedAt: Date;

  @ManyToOne(() => NodeEntity, (node) => node.meters)
  @JoinColumn({ name: 'node_id' })
  node: NodeEntity;

  @ManyToOne(() => ClientEntity, (client) => client.meters)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @OneToMany(() => ConsumptionEntity, (consumption) => consumption.meter)
  consumptions: ConsumptionEntity[];

  @OneToMany(() => ValveEntity, (valve) => valve.meter)
  valves: ValveEntity[];
}