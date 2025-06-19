import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ChatDetailEntity } from './chat-detail.entity';
import { MessageResponseEntity } from './message-response.entity';

@Entity({ name: 'processes' })
export class ProcessEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del proceso.',
  })
  id: number;

  @Column({
    comment: 'Nombre del proceso',
    nullable: false,
  })
  name: string;

  @Column({
    comment: 'Descripción del proceso',
    nullable: true,
  })
  description: string;

  @Column({
    comment: 'Palabras clave para activar el proceso',
    type: 'text',
    nullable: true,
  })
  keywords: string;

  @Column({
    comment: 'Orden de prioridad del proceso',
    default: 0,
  })
  priority: number;

  @Column({
    comment: 'Estado del proceso',
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

  @OneToMany(() => ChatDetailEntity, (detail) => detail.process)
  chatDetails: ChatDetailEntity[];

  @OneToMany(() => MessageResponseEntity, (response) => response.process)
  messageResponses: MessageResponseEntity[];
}