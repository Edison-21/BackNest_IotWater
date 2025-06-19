import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { MeterEntity } from './meter.entity';

@Entity({ name: 'consumptions' })
export class ConsumptionEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del consumo.',
  })
  id: number;

  @Column({
    comment: 'Lectura actual del medidor',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  currentReading: number;

  @Column({
    comment: 'Lectura anterior del medidor',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  previousReading: number;

  @Column({
    comment: 'Consumo calculado',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  consumption: number;

  @Column({
    comment: 'Fecha de la lectura',
    type: 'timestamp',
    nullable: false,
  })
  readingDate: Date;

  @Column({
    comment: 'Período de facturación (YYYY-MM)',
    nullable: false,
  })
  billingPeriod: string;

  @Column({
    comment: 'Tipo de lectura (manual, automática)',
    nullable: false,
    default: 'automatic',
  })
  readingType: string;

  @Column({
    name: 'meter_id',
    comment: 'ID del medidor',
  })
  meterId: number;

  @CreateDateColumn({
    name: 'created_at',
    comment: 'Fecha de creación',
  })
  createdAt: Date;

  @ManyToOne(() => MeterEntity, (meter) => meter.consumptions)
  @JoinColumn({ name: 'meter_id' })
  meter: MeterEntity;
}