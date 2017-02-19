import React from 'react';
import Radium from 'radium';

import theme from '../common/theme';

const style = {
  link: {
    cursor: 'pointer',
    border: 'none',
    textTransform: 'uppercase',
    color: theme.lightestTextColor,
    background: theme.primaryColor,
    padding: '15px 20px',
    margin: '0 2px',
    textDecoration: 'none',
    outline: 'none',
    textShadow: 0,
    ':hover': {
      background: theme.lightestTextColor,
      color: theme.primaryColor
    }
  }
};

const SignInNavItem = props => (
  <li><button style={style.link} onClick={props.onClick}>{props.title}</button></li>
);

SignInNavItem.propTypes = {
  title: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
};

SignInNavItem.defaultProps = {
  title: ''
};

export { SignInNavItem };
export default Radium(SignInNavItem);
