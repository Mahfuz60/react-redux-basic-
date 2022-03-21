import changeTheNumber from './UpDown';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
});

export default rootReducer;
