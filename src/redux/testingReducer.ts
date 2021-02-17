import {
  SET_EN_LANGUAGE,
  SET_RU_LANGUAGE,
  SET_TEXT,
  SET_IS_READY,
} from './types';

const initialState = {
  language: 'ru',
  text: '',
  isReady: false,
};

const testingReducer = (
  state = initialState,
  action: { type: string; payload: { text: string; isReady: boolean } }
) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case SET_EN_LANGUAGE: {
      stateCopy.language = 'en';
      return stateCopy;
    }
    case SET_RU_LANGUAGE: {
      stateCopy.language = 'ru';
      return stateCopy;
    }
    case SET_TEXT: {
      stateCopy.text = action.payload.text;
      return stateCopy;
    }
    case SET_IS_READY: {
      stateCopy.isReady = action.payload.isReady;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default testingReducer;
