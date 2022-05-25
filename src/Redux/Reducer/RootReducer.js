import { combineReducers } from 'redux';
import { counterReducer, authReducer } from './Reducer';

export const rootReducer = combineReducers({
  counterReducer,
  authReducer,
});


