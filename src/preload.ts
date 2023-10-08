// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import FormValues from "./utility/formValues";

import {contextBridge, ipcRenderer} from "electron";


contextBridge.exposeInMainWorld('electronAPI', {
  sendFormData: (dirPath: string, formData: FormValues) => {
    ipcRenderer.send('formData', dirPath, formData);
  },
  // setDirPath: () => {
  //   ipcRenderer.send("setDirPath");
  // }
  getDirPath: () => ipcRenderer.invoke('getDirPath'),
  setDirPath: () => ipcRenderer.invoke('dialog:setDirPath'),
  readConfig: () => ipcRenderer.invoke('readConfig'),
  store: {
    get(key: any) {
      return ipcRenderer.sendSync('electron-store-get', key);
    },
    set(key: any, val: unknown) {
      ipcRenderer.send('electron-store-set', key, val);
    },
    // Other method you want to add like has(), reset(), etc.
  },
})