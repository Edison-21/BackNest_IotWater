import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, JoinColumn, BeforeInsert, BeforeUpdate, AfterLoad } from 'typeorm';
import { SectorEntity } from './sector.entity';
import { MeterEntity } from './meter.entity';
import { CollectionEntity } from './collection.entity';
import { EncryptionUtil } from '@shared/utils';

@Entity({ name: 'clients' })
export class ClientEntity {
  @PrimaryGeneratedColumn('identity', {
    comment: 'Clave primaria del cliente.',
  })
  id: number;

  @Column({
    comment: 'Nombre del cliente (encriptado)',
    nullable: false,
  })
  name: string;

  @Column({
    comment: 'Apellido del cliente (encriptado)',
    nullable: false,
  })
  lastName: string;

  @Column({
    comment: 'Número de identificación (encriptado)',
    nullable: false,
    unique: true,
  })
  identificationNumber: string;

  @Column({
    comment: 'Tipo de identificación',
    nullable: false,
  })
  identificationType: string;

  @Column({
    comment: 'Email del cliente (encriptado)',
    nullable: true,
  })
  email: string;

  @Column({
    comment: 'Teléfono del cliente (encriptado)',
    nullable: true,
  })
  phone: string;

  @Column({
    comment: 'Dirección del cliente (encriptado)',
    nullable: true,
  })
  address: string;

  @Column({
    comment: 'Estado del cliente',
    default: true,
  })
  isActive: boolean;

  @Column({
    name: 'sector_id',
    comment: 'ID del sector al que pertenece',
  })
  sectorId: number;

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

  @ManyToOne(() => SectorEntity, (sector) => sector.clients)
  @JoinColumn({ name: 'sector_id' })
  sector: SectorEntity;

  @OneToMany(() => MeterEntity, (meter) => meter.client)
  meters: MeterEntity[];

  @OneToMany(() => CollectionEntity, (collection) => collection.client)
  collections: CollectionEntity[];

  // Temporary properties for decrypted data (not stored in DB)
  decryptedName?: string;
  decryptedLastName?: string;
  decryptedIdentificationNumber?: string;
  decryptedEmail?: string;
  decryptedPhone?: string;
  decryptedAddress?: string;

  @BeforeInsert()
  @BeforeUpdate()
  encryptSensitiveData() {
    if (this.name && !this.name.includes('U2FsdGVkX1')) {
      this.name = EncryptionUtil.encrypt(this.name);
    }
    if (this.lastName && !this.lastName.includes('U2FsdGVkX1')) {
      this.lastName = EncryptionUtil.encrypt(this.lastName);
    }
    if (this.identificationNumber && !this.identificationNumber.includes('U2FsdGVkX1')) {
      this.identificationNumber = EncryptionUtil.encrypt(this.identificationNumber);
    }
    if (this.email && !this.email.includes('U2FsdGVkX1')) {
      this.email = EncryptionUtil.encrypt(this.email);
    }
    if (this.phone && !this.phone.includes('U2FsdGVkX1')) {
      this.phone = EncryptionUtil.encrypt(this.phone);
    }
    if (this.address && !this.address.includes('U2FsdGVkX1')) {
      this.address = EncryptionUtil.encrypt(this.address);
    }
  }

  @AfterLoad()
  decryptSensitiveData() {
    this.decryptedName = EncryptionUtil.decrypt(this.name);
    this.decryptedLastName = EncryptionUtil.decrypt(this.lastName);
    this.decryptedIdentificationNumber = EncryptionUtil.decrypt(this.identificationNumber);
    this.decryptedEmail = EncryptionUtil.decrypt(this.email);
    this.decryptedPhone = EncryptionUtil.decrypt(this.phone);
    this.decryptedAddress = EncryptionUtil.decrypt(this.address);
  }
}