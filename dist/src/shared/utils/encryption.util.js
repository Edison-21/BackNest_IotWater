"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionUtil = void 0;
const CryptoJS = require("crypto-js");
class EncryptionUtil {
    static encrypt(text) {
        if (!text)
            return text;
        return CryptoJS.AES.encrypt(text, this.SECRET_KEY).toString();
    }
    static decrypt(encryptedText) {
        if (!encryptedText)
            return encryptedText;
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedText, this.SECRET_KEY);
            return bytes.toString(CryptoJS.enc.Utf8);
        }
        catch (error) {
            return encryptedText;
        }
    }
}
exports.EncryptionUtil = EncryptionUtil;
EncryptionUtil.SECRET_KEY = process.env.ENCRYPTION_SECRET || 'default-secret-key';
//# sourceMappingURL=encryption.util.js.map