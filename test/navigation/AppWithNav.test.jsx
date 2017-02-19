import { React, expect, Enzyme, sinon } from '../TestHelpers';
import { AppWithNav } from '../../src/client/js/navigation/AppWithNav';
import AppRoutes from '../../src/client/js/navigation/appRoutes';
import { Nav } from '../../src/client/js/navigation/Nav';

describe('AppWithNav.jsx', () => {
  let appWithNav;
  let checkLoginStatus;
  let location;

  beforeEach(() => {
    checkLoginStatus = sinon.spy();
    location = { pathname: '/someRoute' };
    appWithNav = Enzyme.shallow(
      <AppWithNav location={location} checkLoginStatus={checkLoginStatus} isLoggedIn>
        <div className="someChild" />
      </AppWithNav>
    );
  });

  it('should check login status when mounted', () => {
    expect(checkLoginStatus.calledOnce).to.equal(true);
  });

  it('should be a div with a nav', () => {
    expect(appWithNav.type()).to.equal('div');
    expect(appWithNav.hasClass('app-with-nav')).to.equal(true);

    const nav = appWithNav.childAt(0);

    expect(nav.type()).to.equal(Nav);
    expect(nav.props().isLoggedIn).to.equal(true);

    expect(appWithNav.contains(<div className="someChild" />)).to.equal(true);
  });

  it('should pass isClear to Nav if location is home', () => {
    location = { pathname: AppRoutes.home };
    appWithNav = Enzyme.shallow(
      <AppWithNav location={location} checkLoginStatus={checkLoginStatus} />
    );

    const nav = appWithNav.find(Nav);
    expect(nav.props().isClear).to.equal(true);
  });

  it('should not pass isClear to Nav if location is not home', () => {
    location = { pathname: AppRoutes.problems };
    appWithNav = Enzyme.shallow(
      <AppWithNav location={location} checkLoginStatus={checkLoginStatus} />
    );

    const nav = appWithNav.find(Nav);
    expect(nav.props().isClear).to.equal(false);
  });
});
