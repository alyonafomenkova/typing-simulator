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
  console.log('[testingReducer] stateCopy', stateCopy); // TODO: удалить
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
    case SET_TEXT: {
      console.log('action.payload: ', action.payload);
      stateCopy.text = action.payload.text;
      console.log('[testingReducer] Подтянулся текст', stateCopy); // TODO: удалить
      return stateCopy;
    }
    case SET_IS_READY: {
      console.log('action.payload: ', action.payload);
      stateCopy.isReady = action.payload.isReady;
      console.log('[testingReducer] Поменяли статус isReady', stateCopy); // TODO: удалить
      return stateCopy;
    }
    default:
      return state;
  }
};

export default testingReducer;
