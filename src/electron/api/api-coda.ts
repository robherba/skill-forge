import { ipcMain } from "electron";
import CodaManager from "../coda/coda-manager.js";
import EventResponse from "../events/event-response.js";
import { HttpStatusCode } from "../http/http-types.js";

const DOC_ID = 'rIdPW21crS';
const SKILL_INVENTORY_TABLE_ID = 'grid-Jz0TDG41cL';

async function webChefSkillSheet() {
  const coda = CodaManager.getInstance().getCoda();

  try {
    const table = await coda.getTable(DOC_ID, SKILL_INVENTORY_TABLE_ID);
    const rows = await table.listRows({});
    console.log('rows', rows);
    return new EventResponse<unknown>('hi');
  }
  catch (error) {
    let errorCode: HttpStatusCode = 500;

    if (
      error && typeof error === 'object' &&
      'name' in error &&
      error.name === 'NotFoundError'
    ) {
      errorCode = 404;
    }

    return new EventResponse<unknown>(undefined, errorCode);
  }
}

export function handleEndpoints() {
  ipcMain.handle('api:coda:webChefSkillSheet', () => webChefSkillSheet());
}
