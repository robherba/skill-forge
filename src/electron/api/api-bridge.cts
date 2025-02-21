import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  whoAmI: (apiKey: string) => ipcRenderer.invoke('api:user:whoAmI', apiKey),
});
