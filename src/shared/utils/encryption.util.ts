import * as CryptoJS from 'crypto-js';
import { ConfigService } from '@nestjs/config';

export class EncryptionUtil {
  private static readonly SECRET_KEY = process.env.ENCRYPTION_SECRET || 'default-secret-key';

  static encrypt(text: string): string {
    if (!text) return text;
    return CryptoJS.AES.encrypt(text, this.SECRET_KEY).toString();
  }

  static decrypt(encryptedText: string): string {
    if (!encryptedText) return encryptedText;
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, this.SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      return encryptedText; // Return original if decryption fails
    }
  }
}