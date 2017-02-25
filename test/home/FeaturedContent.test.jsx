import { React, expect, Enzyme } from '../TestHelpers';
import FeaturedContent from '../../src/client/js/home/FeaturedContent';

describe('<FeaturedContent />', () => {
  let featuredContent;
  let user;

  beforeEach(() => {
    user = {
      name: 'a name',
      description: 'a description',
      avatarUrl: 'https://a.link'
    };
    featuredContent = Enzyme.shallow(
      <FeaturedContent user={user} />
    );
  });

  it('should contain an avatar', () => {
    const avatar = featuredContent.find('img');

    expect(avatar.props().alt).to.equal(user.name);
    expect(avatar.props().src).to.equal(user.avatarUrl);
  });

  it('should contain description', () => {
    expect(featuredContent.text()).to.contain(user.name);
    expect(featuredContent.text()).to.contain(user.description);
  });
});
