import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import Router from './navigation/AppRouter';
import reducers from './common/reducers';

import '../sass/main.scss';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : func => func
  )
);

render(
  <Provider store={store}>
    <Router history={hashHistory} />
  </Provider>,
  document.getElementById('app')
);
