import { WebPlugin, PluginListenerHandle } from '@capacitor/core';
import { DarkModePlugin, DarkModeState } from './definitions';
export declare class DarkModeWeb extends WebPlugin implements DarkModePlugin {
    constructor();
    isDarkModeOn(): Promise<DarkModeState>;
    addListener(eventName: 'darkModeStateChanged', listenerFunc: (state: DarkModeState) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    registerDarkModeChangeListener(): void;
}
