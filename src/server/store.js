import { createStore, compose, applyMiddleware } from 'redux';
import { testReducer } from './reducers';
import thunk from 'redux-thunk';

// const enhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(testReducer, { text: 'test' }, enhancer);
