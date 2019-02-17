import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import index from '../reducers/index';

const makeStore = (initialState, options) => {
  const store = createStore(
    index,
    initialState,
    composeWithDevTools(applyMiddleware(logger, promise))
  );
  return store;
};
export default makeStore;
