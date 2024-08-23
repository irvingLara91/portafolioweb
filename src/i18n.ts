import React from "react";
import i18n from 'i18next';
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';
import {useEffect} from "react";
const getCurrentHost = 'http://localhost:5173';

//const getCurrentHost = 'https://ilaraportafolio.netlify.app'



i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        lng: 'es',
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        }
    });

export default i18n;
