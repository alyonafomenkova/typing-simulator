import { combineReducers } from 'redux';
import testingReducer from './testingReducer';

export const rootReducer = combineReducers({
  testingReducer,
});

export default rootReducer;
