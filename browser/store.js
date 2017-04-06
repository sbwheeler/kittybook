import { createStore, applyMiddleware } from 'redux';
import kittyReducer from './reducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// this redux setup is generally boilerplate and not worth worrying too much about. note the middleware I am setting up here. You need to set up thunk like this for it to work, and redux-logger is incredibly helpful when tracking the workings of your action creators and redux store, and will make your debugging much much easier

const middleware = applyMiddleware(createLogger(), thunk);
const store = createStore(kittyReducer, middleware);

export default store;
