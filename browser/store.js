import { createStore, applyMiddleware } from 'redux';
import kittyReducer from './reducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middleware = applyMiddleware(createLogger(), thunk);
const store = createStore(kittyReducer, middleware);

export default store;
