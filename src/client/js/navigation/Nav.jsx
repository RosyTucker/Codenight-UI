import React from 'react';
import Radium from 'radium';

import theme from '../common/theme';
import NavItem from '../navigation/NavItem';
import Strings from '../common/Strings';
import AppRoutes from './AppRoutes';


const style = {
  nav: {
    zIndex: 10,
    width: '100%',
    position: 'fixed',
    '@media only screen and (max-width: 480px)': {
      position: 'initial',
      background: theme.backgroundDark
    }
  },
  clearNav: {
    background: 'transparent'
  },
  opaqueNav: {
    background: theme.backgroundDark
  },
  list: {
    margin: '0 0.5rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyle: 'none',
    fontSize: theme.smallFontSize,
    textTransform: 'uppercase'
  }
};

const loggedInItems = [
  <NavItem title={Strings.nav.profile} key={AppRoutes.profile} route={AppRoutes.profile}/>,
  <NavItem title={Strings.nav.logout} key={AppRoutes.logout} route={AppRoutes.logout}/>
];

const Nav = props => (

  <nav
    style={[
      props.isClear ? style.clearNav : style.opaqueNav,
      style.nav
    ]}
  >
    <ul style={style.list}>
      <NavItem key={AppRoutes.home} title={Strings.nav.home} route={AppRoutes.home}/>
      <NavItem key={AppRoutes.problems} title={Strings.nav.problems} route={AppRoutes.problems}/>
      {props.isLoggedIn ? loggedInItems : null}
    </ul>
  </nav>
);

Nav.propTypes = {
  isClear: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool
};

Nav.defaultProps = {
  isClear: false,
  isLoggedIn: false
};

export { Nav }
export default Radium(Nav);

