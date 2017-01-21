import React from 'react';
import Strings from '../common/Strings';

import '../../sass/home/loginButton.scss';

const LoginButton = ({ onClick }) => (
  <button className="login-button" onClick={onClick}>
    {Strings.signInButton}
  </button>
);

LoginButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default LoginButton;
