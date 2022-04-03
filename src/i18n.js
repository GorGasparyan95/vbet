import i18n from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',

    },
    detection: {
      order: ['path', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
    supportedLngs: ['en', 'hy'],
    fallbackLng: "en",

  })

export default i18n

