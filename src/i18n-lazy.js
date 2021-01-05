import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({ resources: {} });

//* 已載入過的語言列表
const loadedLanguages = [];

function setI18nLanguage(lang) {
  i18n.changeLanguage(lang);
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

export async function loadLanguageAsync(lang) {
  //* 若是與現在相同的語言
  if (i18n.language === lang) {
    return setI18nLanguage(lang);
  }

  //* 若是已載入的語言
  if (loadedLanguages.includes(lang)) {
    return setI18nLanguage(lang);
  }

  console.log('[Lang][Load]', lang);

  //* 載入語言
  const messages = await import(`./locales/${lang}.json`);
  i18n.addResourceBundle(lang, 'translation', messages);
  loadedLanguages.push(lang);
  return setI18nLanguage(lang);
}

export default i18n;
