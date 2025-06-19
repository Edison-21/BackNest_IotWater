import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { NodeEntity } from './node.entity';

@Entity({ name: 'gateways' })
export class GatewayEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del gateway.',
  })
  id: number;

  @Column({
    comment: 'Nombre del gateway',
    nullable: false,
  })
  name: string;

  @Column({
    comment: 'Dirección MAC del gateway',
    nullable: false,
    unique: true,
  })
  macAddress: string;

  @Column({
    comment: 'Dirección IP del gateway',
    nullable: true,
  })
  ipAddress: string;

  @Column({
    comment: 'Ubicación del gateway',
    nullable: true,
  })
  location: string;

  @Column({
    comment: 'Estado del gateway',
    default: true,
  })
  isActive: boolean;

  @Column({
    comment: 'Estado de conexión del gateway',
    default: false,
  })
  isOnline: boolean;

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

  @OneToMany(() => NodeEntity, (node) => node.gateway)
  nodes: NodeEntity[];
}