import { ipcMain } from "electron";
import CodaManager from "../coda/coda-manager.js";
import EventResponse from "../events/event-response.js";
import { HttpStatusCode } from "../http/http-types.js";
import { logger } from "../utils.js";

export interface WhoAmI {
  name: string;
  email: string;
  pictureLink: string;
}

/**
 * Fetches the current user's information using the provided Coda API key.
 *
 * @param {string} apiKey - The Coda API key for authentication.
 * @returns {Promise<EventResponse<WhoAmI>>} A promise that resolves to an EventResponse containing
 * the user's name, email, and picture link if successful, or an error status if failed.
 * @throws Will throw an error if the response is invalid or if an exception occurs during the request.
 */
async function whoAmI(apiKey: string): Promise<EventResponse<WhoAmI>> {
  try {
    const whoAmIResponse: unknown = await CodaManager.getInstance(apiKey).getCoda().whoAmI();

    if (
      whoAmIResponse && typeof whoAmIResponse === 'object' &&
      'name' in whoAmIResponse &&
      'loginId' in whoAmIResponse &&
      'pictureLink' in whoAmIResponse
    ) {
      const whoAmI: WhoAmI = {
        name: whoAmIResponse.name as string,
        email: whoAmIResponse.loginId as string,
        pictureLink: whoAmIResponse.pictureLink as string,
      };

      return new EventResponse<WhoAmI>(whoAmI);
    }

    throw new Error('Invalid whoAmI response.');
  }
  catch (error) {
    let errorCode: HttpStatusCode = 500;

    if (
      error && typeof error === 'object' &&
      'name' in error &&
      error.name === 'UnauthorizedError'
    ) {
      errorCode = 401;
    }

    logger.error(error);
    return new EventResponse<WhoAmI>(undefined, errorCode);
  }
};

export function handleEndpoints() {
  ipcMain.handle('api:user:whoAmI', (event, apiKey: string) => whoAmI(apiKey));
}