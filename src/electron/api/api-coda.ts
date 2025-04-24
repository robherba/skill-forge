import { ipcMain } from "electron";
import CodaManager from "../coda/coda-manager.js";
import EventResponse from "../events/event-response.js";
import { HttpStatusCode } from "../http/http-types.js";
import { Store } from "../storage/store.js";

const DOC_ID = 'rIdPW21crS';
const SKILL_INVENTORY_TABLE_ID = 'grid-Jz0TDG41cL';
const WEB_CHEF_SKILL_SHEET_STORAGE_KEY = 'web_chef_skill_sheet';

type SkillLevel = '' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

interface CodaRowValues {
  Name: string;
  Group: string;
  Skill: string;
  Level?: string;
  "Skill Notes"?: string;
};

export interface Skill {
  name: string;
  level: SkillLevel;
  notes: string;
};

export type GroupedSkills = Record<string, Record<string, Skill>>;

interface PersonSkills {
  skills: GroupedSkills;
};

export type SkillMap = Map<string, PersonSkills>;

async function webChefSkillSheet() {
  const coda = CodaManager.getInstance().getCoda();
  const store = new Store<SkillMap>({ configName: WEB_CHEF_SKILL_SHEET_STORAGE_KEY });

  try {
    const table = await coda.getTable(DOC_ID, SKILL_INVENTORY_TABLE_ID);
    let token: string | undefined;
    let rows: SkillMap = store.getAll();

    if (rows) {
      rows = new Map(Object.entries(rows)) as SkillMap;
      console.log(typeof rows);
      return new EventResponse<SkillMap>(rows);
    }

    rows = new Map();

    do {
      const { items, token: nextToken } = await table.listRowsPaginatedByToken({
        useColumnNames: true,
        ...token && { pageToken: token }
      });

      for (const row of items) {
        const values = row.values as CodaRowValues;

        if (!values?.Name || !values.Skill) continue;

        const name = values.Name;
        const group = values.Group ?? 'ungrouped';
        const skillName = values.Skill;
        const level = (values.Level ?? '') as SkillLevel;
        const notes = values['Skill Notes'] ?? '';

        if (!rows.has(name)) {
          rows.set(name, { skills: {} });
        }

        const personSkills = rows.get(name)!;

        if (!personSkills.skills[group]) {
          personSkills.skills[group] = {};
        }

        personSkills.skills[group][skillName] = { name: skillName, level, notes };
      }

      token = nextToken;
    } while (token);

    store.setAll(rows);
    return new EventResponse<SkillMap>(rows);
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

    return new EventResponse<SkillMap>(undefined, errorCode);
  }
}

export function handleEndpoints() {
  ipcMain.handle('api:coda:webChefSkillSheet', () => webChefSkillSheet());
}
