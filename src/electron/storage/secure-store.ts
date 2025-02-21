import { safeStorage } from "electron";

/**
 * Stores a string securely using the {@link https://www.electronjs.org/docs/latest/api/safe-storage | Electron Safe Storage API}.
 *
 * @throws {Error} if encryption is not available or the encryption fails.
 *
 * @param {string} value The value to store securely.
 * @returns {string} The encrypted buffer as a base64 string.
 */
export const storeEncrypt = (value: string): string => {
  if (!safeStorage.isEncryptionAvailable()) {
    throw new Error("Encryption not available");
  }

  return safeStorage.encryptString(value).toString('base64');
}

/**
 * Decrypts a string that was encrypted using the {@link storeSecure} method.
 *
 * @throws {Error} if encryption is not available or the decryption fails.
 *
 * @param {string} value The encrypted buffer as a base64 string.
 * @returns {string} The decrypted string.
 */
export const storeDecrypt = (value: string): string => {
  if (!safeStorage.isEncryptionAvailable()) {
    throw new Error("Encryption not available");
  }

  return safeStorage.decryptString(Buffer.from(value, 'base64'));
}
