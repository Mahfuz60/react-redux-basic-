import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../Reducer/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = applyMiddleware();

const store = createStore(rootReducer, composeWithDevTools(middleWare));

export default store;
