import { WhoAmI } from './api/user.ts';
import EventResponse from './events/event-response.ts';

export interface IElectronAPI {
  whoAmI: () => Promise<EventResponse<WhoAmI>>,
}

declare global {
  interface Window {
    api: IElectronAPI
  }
}
