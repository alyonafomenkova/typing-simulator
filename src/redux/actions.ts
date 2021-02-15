import {
  SET_RU_LANGUAGE,
  SET_EN_LANGUAGE,
  SET_TEXT,
  SET_IS_READY,
} from './types';

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

const setIsReady = (isReady?: boolean): any => {
  return {
    type: SET_IS_READY,
    payload: {
      isReady,
    },
  };
};

export { setLanguage, setText, setIsReady };
