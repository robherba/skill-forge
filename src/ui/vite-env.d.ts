/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { WhoAmI } from '@/electron/api/user.js';
import EventResponse from '@/electron/events/event-response.js';

export interface IElectronAPI {
  whoAmI: (apiKey: string) => Promise<EventResponse<WhoAmI>>,
}

declare global {
  interface Window {
    api: IElectronAPI,
    utils: {
      openExternalLink: (link: string) => void,
    }
  }
}
