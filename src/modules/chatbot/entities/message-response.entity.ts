import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { ProcessEntity } from './process.entity';

@Entity({ name: 'message_responses' })
export class MessageResponseEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria de la respuesta del mensaje.',
  })
  id: number;

  @Column({
    comment: 'Patrón del mensaje de entrada',
    nullable: false,
  })
  inputPattern: string;

  @Column({
    comment: 'Respuesta del bot',
    type: 'text',
    nullable: false,
  })
  response: string;

  @Column({
    comment: 'Tipo de respuesta',
    nullable: false,
    default: 'text',
  })
  responseType: string; // text, template, interactive, media

  @Column({
    comment: 'Condiciones adicionales (JSON)',
    type: 'text',
    nullable: true,
  })
  conditions: string;

  @Column({
    comment: 'Orden de prioridad',
    default: 0,
  })
  priority: number;

  @Column({
    comment: 'Estado de la respuesta',
    default: true,
  })
  isActive: boolean;

  @Column({
    name: 'process_id',
    comment: 'ID del proceso',
  })
  processId: number;

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

  @ManyToOne(() => ProcessEntity, (process) => process.messageResponses)
  @JoinColumn({ name: 'process_id' })
  process: ProcessEntity;
}