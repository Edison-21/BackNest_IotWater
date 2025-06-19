import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity({ name: 'collections' })
export class CollectionEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria de la recaudación.',
  })
  id: number;

  @Column({
    comment: 'Monto de la factura',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  amount: number;

  @Column({
    comment: 'Monto pagado',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  paidAmount: number;

  @Column({
    comment: 'Saldo pendiente',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  balance: number;

  @Column({
    comment: 'Fecha de vencimiento',
    type: 'date',
    nullable: false,
  })
  dueDate: Date;

  @Column({
    comment: 'Fecha de pago',
    type: 'date',
    nullable: true,
  })
  paymentDate: Date;

  @Column({
    comment: 'Estado del pago',
    nullable: false,
    default: 'pending',
  })
  status: string; // pending, paid, overdue, partial

  @Column({
    comment: 'Período de facturación (YYYY-MM)',
    nullable: false,
  })
  billingPeriod: string;

  @Column({
    comment: 'Método de pago',
    nullable: true,
  })
  paymentMethod: string;

  @Column({
    comment: 'Referencia de pago',
    nullable: true,
  })
  paymentReference: string;

  @Column({
    name: 'client_id',
    comment: 'ID del cliente',
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

  @ManyToOne(() => ClientEntity, (client) => client.collections)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;
}