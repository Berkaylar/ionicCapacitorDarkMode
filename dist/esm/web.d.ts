import { WebPlugin } from '@capacitor/core';
import { DarkModePlugin, DarkModeState } from './definitions';
export declare class DarkModeWeb extends WebPlugin implements DarkModePlugin {
    constructor();
    isDarkModeOn(): Promise<DarkModeState>;
    registerDarkModeChangeListener(): void;
}
