import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity({ name: 'sectors' })
export class SectorEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del sector.',
  })
  id: number;

  @Column({
    comment: 'Nombre del sector',
    nullable: false,
  })
  name: string;

  @Column({
    comment: 'Código del sector',
    nullable: false,
    unique: true,
  })
  code: string;

  @Column({
    comment: 'Descripción del sector',
    nullable: true,
  })
  description: string;

  @Column({
    comment: 'Estado del sector',
    default: true,
  })
  isActive: boolean;

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

  @OneToMany(() => ClientEntity, (client) => client.sector)
  clients: ClientEntity[];
}