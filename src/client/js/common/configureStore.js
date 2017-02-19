import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducerRoot';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  /* eslint-disable */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  store.runSaga = sagaMiddleware.run;
  return store;
}
