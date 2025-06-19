import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, AfterLoad } from 'typeorm';
import { ChatDetailEntity } from './chat-detail.entity';
import { ConversationHistoryEntity } from './conversation-history.entity';
import { EncryptionUtil } from '@shared/utils';

@Entity({ name: 'chats' })
export class ChatEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del chat.',
  })
  id: number;

  @Column({
    comment: 'Número de teléfono del usuario (encriptado)',
    nullable: false,
    unique: true,
  })
  phoneNumber: string;

  @Column({
    comment: 'Nombre del usuario (encriptado)',
    nullable: true,
  })
  userName: string;

  @Column({
    comment: 'Estado del chat',
    default: 'active',
  })
  status: string; // active, inactive, blocked

  @Column({
    comment: 'Última actividad',
    type: 'timestamp',
    nullable: true,
  })
  lastActivity: Date;

  @Column({
    comment: 'Contexto actual de la conversación',
    nullable: true,
  })
  currentContext: string;

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

  @OneToMany(() => ChatDetailEntity, (detail) => detail.chat)
  details: ChatDetailEntity[];

  @OneToMany(() => ConversationHistoryEntity, (history) => history.chat)
  conversationHistory: ConversationHistoryEntity[];

  // Temporary properties for decrypted data
  decryptedPhoneNumber?: string;
  decryptedUserName?: string;

  @BeforeInsert()
  @BeforeUpdate()
  encryptSensitiveData() {
    if (this.phoneNumber && !this.phoneNumber.includes('U2FsdGVkX1')) {
      this.phoneNumber = EncryptionUtil.encrypt(this.phoneNumber);
    }
    if (this.userName && !this.userName.includes('U2FsdGVkX1')) {
      this.userName = EncryptionUtil.encrypt(this.userName);
    }
  }

  @AfterLoad()
  decryptSensitiveData() {
    this.decryptedPhoneNumber = EncryptionUtil.decrypt(this.phoneNumber);
    this.decryptedUserName = EncryptionUtil.decrypt(this.userName);
  }
}