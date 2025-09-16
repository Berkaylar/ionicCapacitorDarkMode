'use strict';

var core = require('@capacitor/core');

const DarkMode = core.registerPlugin('DarkMode', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DarkModeWeb()),
});

class DarkModeWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DarkModeWeb: DarkModeWeb
});

exports.DarkMode = DarkMode;
//# sourceMappingURL=plugin.cjs.js.map
