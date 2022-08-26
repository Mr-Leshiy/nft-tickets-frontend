import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationEN from "../assets/locales/en/translation.json";
import translationUA from "../assets/locales/ua/translation.json";
import translationRU from "../assets/locales/ru/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
  ru: {
    translation: translationRU,
  },
};

//Localisaton
i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["en", "ua", "ru"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
