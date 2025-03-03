import { ipcMain, shell } from "electron";

function openExternalLink(link: string) {
  void shell.openExternal(link);
}

export function handleEndpoints() {
  ipcMain.handle('utils:openExternalLink', (event, link: string) => openExternalLink(link));
}
