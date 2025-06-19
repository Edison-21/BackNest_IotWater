import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { GatewayEntity } from './gateway.entity';
import { MeterEntity } from './meter.entity';

@Entity({ name: 'nodes' })
export class NodeEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del nodo.',
  })
  id: number;

  @Column({
    comment: 'Nombre del nodo',
    nullable: false,
  })
  name: string;

  @Column({
    comment: 'Identificador único del nodo',
    nullable: false,
    unique: true,
  })
  nodeId: string;

  @Column({
    comment: 'Tipo de nodo (sensor, actuador, etc.)',
    nullable: false,
  })
  type: string;

  @Column({
    comment: 'Ubicación del nodo',
    nullable: true,
  })
  location: string;

  @Column({
    comment: 'Estado del nodo',
    default: true,
  })
  isActive: boolean;

  @Column({
    comment: 'Estado de conexión del nodo',
    default: false,
  })
  isOnline: boolean;

  @Column({
    name: 'gateway_id',
    comment: 'ID del gateway al que pertenece',
  })
  gatewayId: number;

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

  @ManyToOne(() => GatewayEntity, (gateway) => gateway.nodes)
  @JoinColumn({ name: 'gateway_id' })
  gateway: GatewayEntity;

  @OneToMany(() => MeterEntity, (meter) => meter.node)
  meters: MeterEntity[];
}