import React from 'react';
import { Link } from 'react-router';

const NavItem = props => (
  <li><Link to={props.route}>{props.title}</Link></li>
);

NavItem.propTypes = {
  title: React.PropTypes.string,
  route: React.PropTypes.string.isRequired
};

export default NavItem;
