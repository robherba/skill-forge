import { Coda } from "coda-js";
import { Store } from "../storage/store.js";

export interface CodaSettings {
  apiKey: string
};

/**
 * Singleton class to manage the Coda API.
 */
export default class CodaManager {

  public static readonly CODA_STORAGE_KEY = 'coda_storage_key';
  private static instance: CodaManager;
  private readonly coda: Coda;

  private constructor(apiKey: string) {
    this.coda = new Coda(apiKey);
  }

  public static getInstance(apiKey: string | undefined = undefined): CodaManager {
    if (!CodaManager.instance) {
      const store = new Store<CodaSettings>({ configName: CodaManager.CODA_STORAGE_KEY });
      if (!apiKey) {
        apiKey = store.get('apiKey', true);
        if (!apiKey) {
          throw new Error('Coda API key not found');
        }
      }
      else {
        store.set('apiKey', apiKey, true);
      }

      CodaManager.instance = new CodaManager(apiKey);
    }

    return CodaManager.instance;
  }

  public getCoda(): Coda {
    return this.coda;
  }

}

/**
 * Extracts the document ID from a Coda document URL.
 *
 * @param {string} documentUrl The URL of the Coda document.
 * @returns {string} The document ID, or an empty string if the URL is invalid.
 */
export const getCodaDocumentId = (documentUrl: string): string => {
  return ((/_d([\w-]+)/.exec(documentUrl)) ?? [])[1] || '';
}
