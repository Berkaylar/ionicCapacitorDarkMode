import { WebPlugin } from '@capacitor/core';
export class DarkModeWeb extends WebPlugin {
    constructor() {
        super();
    }
    async isDarkModeOn() {
        const isDarkModeOn = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        return { isDarkModeOn };
    }
    addListener(eventName, listenerFunc) {
        return super.addListener(eventName, listenerFunc);
    }
    registerDarkModeChangeListener() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            const state = { isDarkModeOn: event.matches };
            this.notifyListeners('darkModeStateChanged', state);
        };
        // Use addEventListener instead of deprecated addListener
        mediaQuery.addEventListener('change', handleChange);
    }
}
//# sourceMappingURL=web.js.map