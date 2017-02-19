import React from 'react';
import Radium from 'radium';

import theme from '../common/theme';
import NavItem from './NavItem';
import SignInNavItem from './SignInNavItem';
import Strings from '../common/strings';
import AppRoutes from './appRoutes';

const style = {
  nav: {
    display: 'flex',
    zIndex: 10,
    width: '100%',
    position: 'fixed',
    background: theme.backgroundDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'uppercase'
  },
  list: {
    margin: '0 0.5rem',
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyle: 'none',
    fontSize: theme.smallFontSize,
    '@media only screen and (max-width: 480px)': {
      justifyContent: 'space-between'
    }
  },
  title: {
    marginLeft: '0.5rem',
    fontWeight: theme.lightFontWeight,
    fontSize: theme.largeFontSize,
    color: theme.lightestTextColor,
    '@media only screen and (max-width: 480px)': {
      display: 'none'
    }
  }
};

const loggedInItems = [
  <NavItem title={Strings.nav.profile} key={AppRoutes.profile} route={AppRoutes.profile} />,
  <NavItem title={Strings.nav.logout} key={AppRoutes.logout} route={AppRoutes.logout} />
];

const Nav = props => (
  <nav style={style.nav}>
    <span style={style.title}>{Strings.nav.title}</span>
    <ul style={style.list}>
      <NavItem key={AppRoutes.home} title={Strings.nav.home} route={AppRoutes.home} />
      <NavItem key={AppRoutes.problems} title={Strings.nav.problems} route={AppRoutes.problems} />
      {props.isLoggedIn
        ? loggedInItems
        : <SignInNavItem onClick={props.onLogin} title={Strings.nav.login} />}
    </ul>
  </nav>
);

Nav.propTypes = {
  isLoggedIn: React.PropTypes.bool,
  onLogin: React.PropTypes.func.isRequired
};

Nav.defaultProps = {
  isLoggedIn: false
};

export { Nav };
export default Radium(Nav);

