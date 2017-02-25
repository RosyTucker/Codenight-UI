import { React, expect, Enzyme, sinon } from '../TestHelpers';
import { AppWithNav } from '../../src/client/js/navigation/AppWithNav';
import Nav from '../../src/client/js/navigation/Nav';

describe('<AppWithNav />', () => {
  let appWithNav;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      checkLoginStatus: sinon.spy(),
      onLogin: sinon.spy(),
      isLoggedIn: true
    };
    appWithNav = Enzyme.shallow(
      <AppWithNav {...defaultProps}><div className="someChild" /></AppWithNav>
    );
  });

  it('should check login status when mounted', () => {
    appWithNav.instance().componentDidMount();
    expect(defaultProps.checkLoginStatus.calledOnce).to.equal(true);
  });

  it('should contain a nav', () => {
    const nav = appWithNav.find(Nav);

    expect(nav.props().isLoggedIn).to.equal(true);
    expect(nav.props().onLogin).to.equal(defaultProps.onLogin);
    expect(appWithNav.contains(<div className="someChild" />)).to.equal(true);
  });
});
