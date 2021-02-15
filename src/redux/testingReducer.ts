import Action from './action.types';
import { SET_EN_LANGUAGE, SET_RU_LANGUAGE } from './types';

const initialState = {
  language: 'ru',
};

const testingReducer = (state = initialState, action: Action<string>) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case SET_EN_LANGUAGE: {
      stateCopy.language = 'en';
      console.log('[testingReducer] Изменился стейт на en', stateCopy); // TODO: удалить
      return stateCopy;
    }
    case SET_RU_LANGUAGE: {
      stateCopy.language = 'ru';
      console.log('[testingReducer] Изменился стейт на ru', stateCopy); // TODO: удалить
      return stateCopy;
    }
    default:
      return state;
  }
};

export default testingReducer;
