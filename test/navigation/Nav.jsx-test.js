import { React, expect, Enzyme, Sandbox } from '../TestHelpers';
import Nav from '../../client2/js/navigation/Nav';
import NavItem from '../../client2/js/navigation/NavItem';
import Strings from '../../client2/js/common/Strings';
import AppRoutes from '../../client2/js/navigation/AppRoutes';

describe('Nav.jsx', () => {
  const sandbox = new Sandbox();
  let nav;

  beforeEach(() => {
    nav = Enzyme.shallow(<Nav />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be a container with a list', () => {
    expect(nav.type()).to.equal('div');
    expect(nav.hasClass('nav')).to.equal(true);
    expect(nav.hasClass('opaque')).to.equal(true);

    const list = nav.find('ul');
    expect(list).to.have.length(1);
  });

  it('should change opaque class  to clear if isClear is set', () => {
    nav = Enzyme.shallow(<Nav isClear />);

    expect(nav.hasClass('nav')).to.equal(true);
    expect(nav.hasClass('clear')).to.equal(true);
    expect(nav.hasClass('opaque')).to.equal(false);
  });


  it('should contain a home nav item as item 0', () => {
    const list = nav.find('ul');

    const homeItem = list.childAt(0);
    expect(homeItem.type()).to.equal(NavItem);
    expect(homeItem.props().title).to.equal(Strings.nav.home);
    expect(homeItem.props().route).to.equal(AppRoutes.home);
  });

  it('should contain a problems nav item as item 1', () => {
    const list = nav.find('ul');

    const homeItem = list.childAt(1);
    expect(homeItem.type()).to.equal(NavItem);
    expect(homeItem.props().title).to.equal(Strings.nav.problems);
    expect(homeItem.props().route).to.equal(AppRoutes.problems);
  });

  it('should not contain any logged in items if not logged in ', () => {
    const list = nav.find('ul');

    expect(list.children()).to.have.length(2);
  });

  it('should contain a profile nav item as item 2 if logged in', () => {
    nav = Enzyme.shallow(<Nav isLoggedIn />);

    const list = nav.find('ul');

    const homeItem = list.childAt(2);
    expect(homeItem.type()).to.equal(NavItem);
    expect(homeItem.props().title).to.equal(Strings.nav.profile);
    expect(homeItem.props().route).to.equal(AppRoutes.profile);
  });

  it('should contain a logout nav item as item 3 if logged in', () => {
    nav = Enzyme.shallow(<Nav isLoggedIn />);

    const list = nav.find('ul');

    const homeItem = list.childAt(3);
    expect(homeItem.type()).to.equal(NavItem);
    expect(homeItem.props().title).to.equal(Strings.nav.logout);
    expect(homeItem.props().route).to.equal(AppRoutes.logout);
  });
});
