import { SET_RU_LANGUAGE, SET_EN_LANGUAGE, SET_TEXT } from './types';

const setLanguage = (language: string): any => {
  switch (language) {
    case 'en': {
      return { type: SET_EN_LANGUAGE };
    }
    default:
      return { type: SET_RU_LANGUAGE };
  }
};

const setText = (text?: string): any => {
  return {
    type: SET_TEXT,
    payload: {
      text,
    },
  };
};

export { setLanguage, setText };
