import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { StyleRoot } from 'radium';
import moment from 'moment';

import configureStore from './config/configureStore';
import sagaRoot from './config/sagaRoot';
import AppRouter from './navigation/AppRouter';
import theme from './common/theme';

moment.locale('en-gb');

// eslint-disable-next-line no-undef
const store = configureStore({ config: JSON.parse(decodeURIComponent(window.reactSettings)) });
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

const App = () => (
  <Provider store={store}>
    <StyleRoot style={pageStyle}>
      <AppRouter history={hashHistory} />
    </StyleRoot>
  </Provider>
);

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('app'));

export default App;
