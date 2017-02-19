import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { StyleRoot } from 'radium';

import configureStore from './common/configureStore';
import sagaRoot from './common/sagaRoot';
import AppRouter from './navigation/AppRouter';
import theme from './common/theme';

const store = configureStore();
store.runSaga(sagaRoot);


const pageStyle = {
  fontFamily: 'Raleway, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  color: theme.darkTextColor,
  fontSize: theme.mediumFontSize,
  padding: 0,
  margin: 0,
  outline: 'none',
  textDecoration: 'none',
  border: 0
};
render(
  <Provider store={store}>
    <StyleRoot style={pageStyle}>
      <AppRouter history={hashHistory} />
    </StyleRoot>
  </Provider>,
    // eslint-disable-next-line no-undef
    document.getElementById('app'));
