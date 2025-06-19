import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ChatDetailEntity } from './chat-detail.entity';

@Entity({ name: 'tags' })
export class TagEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria de la etiqueta.',
  })
  id: number;

  @Column({
    comment: 'Nombre de la etiqueta',
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    comment: 'Color de la etiqueta',
    nullable: true,
    default: '#007bff',
  })
  color: string;

  @Column({
    comment: 'Descripción de la etiqueta',
    nullable: true,
  })
  description: string;

  @Column({
    comment: 'Estado de la etiqueta',
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

  @ManyToMany(() => ChatDetailEntity, (detail) => detail.tags)
  chatDetails: ChatDetailEntity[];
}