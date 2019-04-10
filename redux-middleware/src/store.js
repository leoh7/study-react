import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger'
// import ReduxThunk from 'redux-thunk';
// import { createPromise } from 'redux-promise-middleware';
import penderMiddleware from 'redux-pender';

const logger = createLogger();
// const pm = createPromise({
//   promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
// });

const store = createStore(modules, applyMiddleware(logger, penderMiddleware()));

export default store;