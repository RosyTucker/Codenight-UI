import { React, expect, Enzyme, Sandbox } from '../TestHelpers';
import NavItem from '../../src/client/js/navigation/NavItem';

describe('NavItem.jsx', () => {
  const sandbox = new Sandbox();
  const title = 'a title';
  const route = '/aRoute';
  let navItem;

  beforeEach(() => {
    navItem = Enzyme.shallow(<NavItem title={title} route={route} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be list item with a link', () => {
    expect(navItem.type()).to.equal('li');

    const link = navItem.childAt(0);

    expect(link.props().to).to.equal(route);
    expect(link.children().text()).to.equal(title);
  });
});
