import { PluginListenerHandle } from '@capacitor/core';

export interface DarkModeState {
  isDarkModeOn: boolean;
}

export interface DarkModePlugin {
  isDarkModeOn(): Promise<DarkModeState>;
  addListener(
    eventName: 'darkModeStateChanged',
    listenerFunc: (state: DarkModeState) => void,
  ): PluginListenerHandle;
  registerDarkModeChangeListener(): void;
}
