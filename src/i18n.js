"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = require("i18next");
var i18next_http_backend_1 = require("i18next-http-backend");
var react_i18next_1 = require("react-i18next");
var getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:5173' : 'https://ilaraportafolio.netlify.app';
i18next_1.default
    .use(i18next_http_backend_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    fallbackLng: 'es',
    lng: 'es',
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: "".concat(getCurrentHost, "/i18n/{{lng}}.json"),
    }
});
exports.default = i18next_1.default;
