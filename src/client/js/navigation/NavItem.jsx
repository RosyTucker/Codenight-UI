import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import theme from '../common/theme';

const StyledLink = Radium(Link);

const style = {
  link: {
    display: 'inline-block',
    color: theme.lightestTextColor,
    padding: '15px 20px',
    margin: '0 2px',
    textDecoration: 'none',
    ':hover': {
      background: theme.lightestTextColor,
      color: theme.primaryColor
    }
  }
};

const NavItem = props => (
  <li>
    <StyledLink style={props.style || style.link} to={props.route}>
      {props.title}
    </StyledLink>
  </li>
);

NavItem.propTypes = {
  title: React.PropTypes.string,
  route: React.PropTypes.string.isRequired,
  style: React.PropTypes.shape({})
};

NavItem.defaultProps = {
  title: '',
  style: null
};

export default Radium(NavItem);
