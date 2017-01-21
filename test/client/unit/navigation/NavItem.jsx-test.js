import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../../TestHelpers';
import { Link } from 'react-router';
import NavItem from '../../../../src/client/js/navigation/NavItem';

describe('NavItem.jsx', () => {
  const sandbox = new Sandbox();
  const title = 'a title';
  const route = '/aRoute';
  let navItem;

  beforeEach(() => {
    ComponentHelpers.stub(sandbox, Link);
    navItem = Enzyme.shallow(<NavItem title={title} route={route} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be list item with a link', () => {
    expect(navItem.type()).to.equal('li');

    const link = navItem.find(Link);
    expect(link).to.have.length(1);

    expect(link.props().to).to.equal(route);
    expect(link.childAt(0).text()).to.equal(title);
  });
});
