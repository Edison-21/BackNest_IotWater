import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { MeterEntity } from './meter.entity';

@Entity({ name: 'valves' })
export class ValveEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria de la válvula.',
  })
  id: number;

  @Column({
    comment: 'Nombre de la válvula',
    nullable: false,
  })
  name: string;

  @Column({
    comment: 'Tipo de válvula',
    nullable: false,
  })
  type: string;

  @Column({
    comment: 'Estado de la válvula (abierta/cerrada)',
    default: true,
  })
  isOpen: boolean;

  @Column({
    comment: 'Estado de la válvula',
    default: true,
  })
  isActive: boolean;

  @Column({
    comment: 'Ubicación de la válvula',
    nullable: true,
  })
  location: string;

  @Column({
    comment: 'Fecha de la última operación',
    type: 'timestamp',
    nullable: true,
  })
  lastOperationDate: Date;

  @Column({
    name: 'meter_id',
    comment: 'ID del medidor asociado',
  })
  meterId: number;

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

  @ManyToOne(() => MeterEntity, (meter) => meter.valves)
  @JoinColumn({ name: 'meter_id' })
  meter: MeterEntity;
}