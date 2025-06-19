export declare class EncryptionUtil {
    private static readonly SECRET_KEY;
    static encrypt(text: string): string;
    static decrypt(encryptedText: string): string;
}
