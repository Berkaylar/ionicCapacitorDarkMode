var capacitorCapacitorDarkMode = (function (exports, core) {
    'use strict';

    const DarkMode = core.registerPlugin('DarkMode', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DarkModeWeb()),
    });

    class DarkModeWeb extends core.WebPlugin {
        constructor() {
            super();
        }
        async isDarkModeOn() {
            const isDarkModeOn = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return { isDarkModeOn };
        }
        registerDarkModeChangeListener() {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = (event) => {
                const state = { isDarkModeOn: event.matches };
                this.notifyListeners("darkModeStateChanged", state);
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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
