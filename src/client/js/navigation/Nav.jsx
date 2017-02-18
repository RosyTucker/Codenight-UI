import React from 'react';
import NavItem from '../navigation/NavItem';
import Strings from '../common/Strings';
import AppRoutes from './AppRoutes';

const loggedInItems = [
  <NavItem title={Strings.nav.profile} key={AppRoutes.profile} route={AppRoutes.profile} />,
  <NavItem title={Strings.nav.logout} key={AppRoutes.logout} route={AppRoutes.logout} />
];

const Nav = props => (
  <div>
    <ul>
      <NavItem title={Strings.nav.home} route={AppRoutes.home} />
      <NavItem title={Strings.nav.problems} route={AppRoutes.problems} />
      {props.isLoggedIn ? loggedInItems : null}
    </ul>
  </div>
  );

Nav.propTypes = {
  isClear: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool
};

export default Nav;
