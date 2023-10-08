import {app, BrowserWindow, dialog, ipcMain} from 'electron';
import path from 'path';
import FormValues from "./utility/formValues";
import * as fs from "fs";
import Store from "electron-store";

const store = new Store();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // TODO - izbere destinacijo za shranit file
  // TODO - zapiše file na disk
  // TODO - prebere file z diska in nastavi config

  ipcMain.on('formData', (event, dirPath: string, formData: FormValues) => {
    try {
      if(!dirPath){
        fs.writeFileSync(app.getPath("desktop") + '/config.json', JSON.stringify(formData), 'utf-8');
      }else{
        fs.writeFileSync(dirPath + '/config.json', JSON.stringify(formData), 'utf-8');
      }
    } catch (e) {
      console.error(dirPath + '/config.json ->', 'Failed to save the file!');
    }
  });

  ipcMain.handle('dialog:setDirPath', setDirPath);
  ipcMain.handle("getDirPath", getDirPath);
  ipcMain.handle("readConfig", readconfig);
  ipcMain.on('electron-store-get', async (event, val) => {
    event.returnValue = store.get(val);
  });
  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set(key, val);
  });
};

const readconfig = () => {
  const dirPath = getDirPath();
  if(dirPath){
    try {
      const config = fs.readFileSync(dirPath + '/config.json', {encoding: "utf-8"});
      if(config){
        return JSON.parse(config);
      }
    } catch (e) {
      console.error(dirPath + '/config.json ->', 'Failed to read the file!');
    }
  }
}

const getDirPath = () => {
  const dirPath = store.get("dirPath");
  if(dirPath){
    return dirPath;
  }
}

const setDirPath = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ['openDirectory'] })
  if (!canceled) {
    app.setPath("temp",filePaths[0]);
    return filePaths[0];
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
