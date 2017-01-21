import React from 'react';
import { Link } from 'react-router';

import '../../sass/navigation/nav.scss';

const NavItem = props => (
  <li><Link to={props.route}>{props.title}</Link></li>
);

NavItem.propTypes = {
  title: React.PropTypes.string,
  route: React.PropTypes.string.isRequired
};

export default NavItem;
