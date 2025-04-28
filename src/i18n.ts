// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n
  .use(initReactI18next) // Translations for React
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    lng: "fr", // Default language
    fallbackLng: "fr", // Language to fallback to if the selected one is not available
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
