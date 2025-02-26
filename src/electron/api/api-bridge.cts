import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  whoAmI: (apiKey: string) => ipcRenderer.invoke('api:user:whoAmI', apiKey),
});

contextBridge.exposeInMainWorld("utils", {
  openExternalLink: (link: string) => ipcRenderer.invoke('utils:openExternalLink', link),
});
