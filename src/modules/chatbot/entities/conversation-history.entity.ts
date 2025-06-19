import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn, BeforeInsert, BeforeUpdate, AfterLoad } from 'typeorm';
import { ChatEntity } from './chat.entity';
import { EncryptionUtil } from '@shared/utils';

@Entity({ name: 'conversation_history' })
export class ConversationHistoryEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del historial de conversación.',
  })
  id: number;

  @Column({
    comment: 'Mensaje completo de la conversación (encriptado)',
    type: 'text',
    nullable: false,
  })
  message: string;

  @Column({
    comment: 'Tipo de participante',
    nullable: false,
  })
  participantType: string; // user, bot

  @Column({
    comment: 'Metadatos adicionales (JSON encriptado)',
    type: 'text',
    nullable: true,
  })
  metadata: string;

  @Column({
    comment: 'Sesión de la conversación',
    nullable: true,
  })
  sessionId: string;

  @Column({
    name: 'chat_id',
    comment: 'ID del chat',
  })
  chatId: number;

  @CreateDateColumn({
    name: 'created_at',
    comment: 'Fecha de creación',
  })
  createdAt: Date;

  @ManyToOne(() => ChatEntity, (chat) => chat.conversationHistory)
  @JoinColumn({ name: 'chat_id' })
  chat: ChatEntity;

  // Temporary properties for decrypted data
  decryptedMessage?: string;
  decryptedMetadata?: string;

  @BeforeInsert()
  @BeforeUpdate()
  encryptSensitiveData() {
    if (this.message && !this.message.includes('U2FsdGVkX1')) {
      this.message = EncryptionUtil.encrypt(this.message);
    }
    if (this.metadata && !this.metadata.includes('U2FsdGVkX1')) {
      this.metadata = EncryptionUtil.encrypt(this.metadata);
    }
  }

  @AfterLoad()
  decryptSensitiveData() {
    this.decryptedMessage = EncryptionUtil.decrypt(this.message);
    this.decryptedMetadata = EncryptionUtil.decrypt(this.metadata);
  }
}