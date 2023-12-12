import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../lang/en.json";
import tr from "../lang/tr.json";

export const languageOptions = {
  en: { translation: en },
  tr: { translation: tr },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3", // React Native için gerekli
  lng: "en", // Varsayılan dili belirler
  fallbackLng: "en", // Desteklenmeyen bir dil geldiğinde kullanılacak dil
  resources: languageOptions,
});

export default i18next;
