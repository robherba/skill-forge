/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import EventResponse from '@/electron/events/event-response.js';
import { WhoAmI } from '@/electron/api/user.js';

export interface IElectronAPI {
  whoAmI: (apiKey: string) => Promise<EventResponse<WhoAmI>>,
}

declare global {
  interface Window {
    api: IElectronAPI,
  }
}
