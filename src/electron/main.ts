import { app, BrowserWindow } from 'electron';
import path from 'path';
import { handleEndpoints as utilsHandleEndpoints } from './api/api-handle.js';
import { handleEndpoints as userHandleEndpoints } from './api/api-user.js';
import { isDev } from './utils/utils.js';

app.on("ready", () => {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: path.join(app.getAppPath(), '/dist-electron/api/api-bridge.cjs'),
		},
	});

	userHandleEndpoints();
	utilsHandleEndpoints();

	if (isDev()) {
		void mainWindow.loadURL('http://localhost:5123');
	} else {
		void mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
	}
});
