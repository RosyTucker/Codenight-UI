import React, { PropTypes } from 'react';
import Radium from 'radium';

import theme from '../common/theme';
import strings from '../common/strings';

const style = {
  cursor: 'pointer',
  margin: '30px 20px',
  backgroundColor: theme.primaryColor,
  border: `thin solid ${theme.primaryColorDark}`,
  color: theme.lightestTextColor,
  padding: '20px 30px',
  fontWeight: theme.lightFontWeight,
  fontSize: theme.largeFontSize,
  textDecoration: 'none',
  outline: 'none',
  textShadow: 0,
  textTransform: 'uppercase',
  ':hover': {
    backgroundColor: theme.primaryColorDark
  }
};

const LoginButton = ({ onClick }) => (
  <button style={style} onClick={onClick}>
    {strings.home.signInButton}
  </button>
);

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Radium(LoginButton);
