import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, JoinColumn } from 'typeorm';
import { ChatEntity } from './chat.entity';
import { ProcessEntity } from './process.entity';
import { TagEntity } from './tag.entity';

@Entity({ name: 'chat_details' })
export class ChatDetailEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del detalle del chat.',
  })
  id: number;

  @Column({
    comment: 'Mensaje del usuario',
    type: 'text',
    nullable: false,
  })
  userMessage: string;

  @Column({
    comment: 'Respuesta del bot',
    type: 'text',
    nullable: true,
  })
  botResponse: string;

  @Column({
    comment: 'Tipo de mensaje',
    nullable: false,
    default: 'text',
  })
  messageType: string; // text, image, audio, document, location

  @Column({
    comment: 'Estado del mensaje',
    nullable: false,
    default: 'sent',
  })
  status: string; // sent, delivered, read, failed

  @Column({
    comment: 'Tiempo de respuesta en milisegundos',
    nullable: true,
  })
  responseTime: number;

  @Column({
    name: 'chat_id',
    comment: 'ID del chat',
  })
  chatId: number;

  @Column({
    name: 'process_id',
    comment: 'ID del proceso',
    nullable: true,
  })
  processId: number;

  @CreateDateColumn({
    name: 'created_at',
    comment: 'Fecha de creación',
  })
  createdAt: Date;

  @ManyToOne(() => ChatEntity, (chat) => chat.details)
  @JoinColumn({ name: 'chat_id' })
  chat: ChatEntity;

  @ManyToOne(() => ProcessEntity, (process) => process.chatDetails)
  @JoinColumn({ name: 'process_id' })
  process: ProcessEntity;

  @ManyToMany(() => TagEntity, (tag) => tag.chatDetails)
  @JoinTable({
    name: 'chat_detail_tags',
    joinColumn: { name: 'chat_detail_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: TagEntity[];
}