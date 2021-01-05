import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  enUs: {
    translation: {
      hi: 'hello',
    },
  },
  zhTw: {
    translation: {
      hi: '嗨',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'enUs', //* 初始設置的語言
  });

export default i18n;
