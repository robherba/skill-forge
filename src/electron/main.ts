import { app, BrowserWindow } from 'electron';
import path from 'path';
import { handleEndpoints as codaHandleEndpoints } from './api/api-coda.js';
import { handleEndpoints as userHandleEndpoints } from './api/api-user.js';
import { handleEndpoints as utilsHandleEndpoints } from './api/api-utils.js';
import { isDev } from './utils/utils.js';

app.on("ready", () => {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: path.join(app.getAppPath(), '/dist-electron/bridge/preload.cjs'),
		},
	});

	userHandleEndpoints();
	utilsHandleEndpoints();
	codaHandleEndpoints();

	if (isDev()) {
		void mainWindow.loadURL('http://localhost:5123');
	} else {
		void mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
	}
});
