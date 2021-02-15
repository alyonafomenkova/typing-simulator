import { SET_RU_LANGUAGE, SET_EN_LANGUAGE } from './types';

const setLanguage = (language: string): any => {
  switch (language) {
    case 'en': {
      return { type: SET_EN_LANGUAGE };
    }
    default:
      return { type: SET_RU_LANGUAGE };
  }
};

export default setLanguage;
