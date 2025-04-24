/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { SkillMap } from '@/electron/api/api-coda';
import { WhoAmI } from '@/electron/api/user.js';
import EventResponse from '@/electron/events/event-response.js';

export interface IElectronAPI {
  whoAmI: (apiKey: string) => Promise<EventResponse<WhoAmI>>,
  webChefSkillSheet: () => Promise<EventResponse<SkillMap>>;
}

declare global {
  interface Window {
    api: IElectronAPI,
    utils: {
      openExternalLink: (link: string) => void,
    }
  }
}
