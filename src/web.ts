import { WebPlugin, PluginListenerHandle } from '@capacitor/core';
import { DarkModePlugin, DarkModeState } from './definitions';

export class DarkModeWeb extends WebPlugin implements DarkModePlugin {
  constructor() {
    super();
  }

  async isDarkModeOn(): Promise<DarkModeState> {
    const isDarkModeOn =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return { isDarkModeOn };
  }

  addListener(
    eventName: 'darkModeStateChanged',
    listenerFunc: (state: DarkModeState) => void,
  ): Promise<PluginListenerHandle> {
    return super.addListener(eventName, listenerFunc);
  }

  registerDarkModeChangeListener(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      const state: DarkModeState = { isDarkModeOn: event.matches };
      this.notifyListeners('darkModeStateChanged', state);
    };

    // Use addEventListener instead of deprecated addListener
    mediaQuery.addEventListener('change', handleChange);
  }
}
