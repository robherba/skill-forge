import { safeStorage } from "electron";

/**
 * Stores a string securely using the {@link https://www.electronjs.org/docs/latest/api/safe-storage | Electron Safe Storage API}.
 *
 * @throws {Error} if encryption is not available or the encryption fails.
 *
 * @param {string} value The value to store securely.
 * @returns {Buffer<ArrayBufferLike>} The encrypted buffer.
 */
export const storeEncrypt = (value: string): Buffer<ArrayBufferLike> => {
  if (!safeStorage.isEncryptionAvailable()) {
    throw new Error("Encryption not available");
  }

  return safeStorage.encryptString(value);
}

/**
 * Decrypts a string that was encrypted using the {@link storeSecure} method.
 *
 * @throws {Error} if encryption is not available or the decryption fails.
 *
 * @param {Buffer<ArrayBufferLike>} value The encrypted buffer.
 * @returns {string} The decrypted string.
 */
export const storeDecrypt = (value: Buffer<ArrayBufferLike>): string => {
  if (!safeStorage.isEncryptionAvailable()) {
    throw new Error("Encryption not available");
  }

  return safeStorage.decryptString(value);
}
