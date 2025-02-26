import { app } from "electron";
import fs from "fs";
import path from "path";
import { logger } from "../utils/utils.js";
import { storeDecrypt, storeEncrypt } from "./secure-store.js";

interface StoreOptions {
  configName: string;
}

export class Store<T> {
  private path: string;
  private data: T;

  constructor(storeOptions: StoreOptions) {
    const userDataPath = app.getPath("userData");
    this.path = path.join(userDataPath, `${storeOptions.configName}.json`);
    this.data = this.loadData();
  }

  get<K extends keyof T>(key: K, decrypt = false): T[K] | undefined {
    const value = this.data[key] || undefined;
    if (decrypt && value) {
      return storeDecrypt(value as string) as T[K];
    }

    return value;
  }

  set<K extends keyof T>(key: K, value: T[K], encrypt = false): void {
    this.data[key] = value;
    try {
      if (encrypt) {
        this.data[key] = storeEncrypt(value as string) as T[K];
      }

      fs.writeFileSync(this.path, JSON.stringify(this.data, null, 2));
    } catch (error) {
      logger.error("Failed to save data:", error);
    }
  }

  private loadData(): T {
    if (!fs.existsSync(this.path)) {
      return {} as T;
    }

    try {
      const fileContents = fs.readFileSync(this.path, "utf-8");
      return JSON.parse(fileContents) as T;
    } catch (error) {
      logger.error("Failed to parse config file:", error);
      return {} as T;
    }
  }
}
