import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
import Backend from 'i18next-xhr-backend';
import XHR from 'i18next-xhr-backend'
import languageEN from './locate/en/translate.json'
import languageJP from './locate/jp/translate.json'
import languageAR from './locate/ar/translate.json'

// i18n.use(XHR).use(LanguageDetector).use(initReactI18next).init({
//     resources: {
//         en: languageEN,
//         jp: languageJP,
//         ar: languageAR
//     },
//     /* default language when load the website in browser */
//     lng: "en",
//     /* When react i18next not finding any language to as default in borwser */
//     fallbackLng: "en",
//     /* debugger For Development environment */
//     debug: true,
//     ns: ["translations"],
//     defaultNS: "translations",
//     keySeparator: ".",
//     interpolation: {
//         escapeValue: false,
//         formatSeparator: ","
//     },
//     react: {
//         wait: true,
//         bindI18n: 'languageChanged loaded',
//         bindStore: 'added removed',
//         nsMode: 'default'
//     }
// })

i18n
  // load translation using xhr -> see /public/locales
  .use(Backend).use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'translations',
    ns: ['translations'],
    backend: {
      loadPath: `${window.location.origin}/locales/{{lng}}/translate.json`
    },
    
    load: 'unspecific',
    // special options for react-i18next
    // learn more: https://react.i18next.com/components/i18next-instance
    react: {
      wait: true,
      useSuspense: false,
    }
  });

export default i18n;