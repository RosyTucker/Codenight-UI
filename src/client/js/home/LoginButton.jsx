import React from 'react';
import Radium from 'radium';

import theme from '../common/theme';
import Strings from '../common/strings';

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
  textShadow: 0,
  textTransform: 'uppercase',
  ':hover': {
    backgroundColor: theme.primaryColorDark
  }
};

const LoginButton = ({ onClick }) => (
  <button style={style} onClick={onClick}>
    {Strings.home.signInButton}
  </button>
);

LoginButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export { LoginButton };

export default Radium(LoginButton);
