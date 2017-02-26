import { React, expect, Enzyme, sinon } from '../TestHelpers';
import Nav from '../../src/client/js/navigation/Nav';
import NavItem from '../../src/client/js/navigation/NavItem';
import strings from '../../src/client/js/common/strings';
import appRoutes from '../../src/client/js/navigation/appRoutes';
import SignInNavItem from '../../src/client/js/navigation/SignInNavItem';

describe('<Nav />', () => {
  let nav;
  let navItemsList;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      onLogin: sinon.spy()
    };
    nav = Enzyme.shallow(<Nav {...defaultProps} isLoggedIn={false} />);
    navItemsList = nav.find('ul').at(1);
  });

  it('should contain a home item as first item', () => {
    const homeItem = navItemsList.childAt(0);
    expect(homeItem.type()).to.equal(NavItem);
    expect(homeItem.props().title).to.equal(strings.nav.home);
    expect(homeItem.props().route).to.equal(appRoutes.home);
  });

  it('should contain a problems nav item as second item', () => {
    const homeItem = navItemsList.childAt(1);
    expect(homeItem.type()).to.equal(NavItem);
    expect(homeItem.props().title).to.equal(strings.nav.problems);
    expect(homeItem.props().route).to.equal(appRoutes.problems);
  });

  it('should contain sign in item if not logged in', () => {
    const signInItem = nav.find(SignInNavItem);

    expect(signInItem.props().title).to.equal(strings.nav.login);
    expect(signInItem.props().onClick).to.equal(defaultProps.onLogin);
  });

  it('should not contain any logged in items if not logged in ', () => {
    expect(navItemsList.children()).to.have.length(3);
  });

  it('should contain a profile nav item as item 2 if logged in', () => {
    nav = Enzyme.shallow(<Nav {...defaultProps} isLoggedIn />);
    navItemsList = nav.find('ul').at(1);

    const profileItem = navItemsList.childAt(2);
    expect(profileItem.type()).to.equal(NavItem);
    expect(profileItem.props().title).to.equal(strings.nav.profile);
    expect(profileItem.props().route).to.equal(appRoutes.profile);
  });

  it('should contain a logout item if logged in', () => {
    nav = Enzyme.shallow(<Nav {...defaultProps} isLoggedIn />);
    navItemsList = nav.find('ul').at(1);

    const homeItem = navItemsList.childAt(3);
    expect(homeItem.type()).to.equal('a');
    expect(homeItem.text()).to.equal(strings.nav.logout);
    expect(homeItem.props().href).to.equal(appRoutes.logout);
  });
});
