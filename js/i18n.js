import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './es.js';
import en from './en.js';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};

i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
