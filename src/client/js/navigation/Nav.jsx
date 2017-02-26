import React from 'react';
import Radium from 'radium';

import theme from '../common/theme';
import NavItem from './NavItem';
import SignInNavItem from './SignInNavItem';
import strings from '../common/strings';
import appRoutes from './appRoutes';

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
  },
  logout: {
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

const loggedInItems = [
  <NavItem title={strings.nav.profile} key={appRoutes.profile} route={appRoutes.profile} />,
  <a style={style.logout} key={appRoutes.logout} href={appRoutes.logout}>{strings.nav.logout}</a>
];

const Nav = props => (
  <nav style={style.nav}>
    <span style={style.title}>{strings.nav.title}</span>
    <ul style={style.list}>
      <NavItem key={appRoutes.home} title={strings.nav.home} route={appRoutes.home} />
      <NavItem key={appRoutes.problems} title={strings.nav.problems} route={appRoutes.problems} />
      {props.isLoggedIn
        ? loggedInItems
        : <SignInNavItem onClick={props.onLogin} title={strings.nav.login} />}
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

export default Radium(Nav);

