// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Vite
// plugin that tells the Electron app where to look for the Vite-bundled app code (depending on
// whether you're running in development or production).
// import FormValues from "./utility/formValues";

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;
declare global {
  interface Window {
    electronAPI: {
      sendFormData: (dirPath: string, formData: []) => void;
      getDirPath: () => Promise<string>;
      setDirPath: () => Promise<string>;
      readConfig: () => object;
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        // any other methods you've defined...
      };
    };
  }
}