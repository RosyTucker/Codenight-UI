import { React, expect, Sandbox, Enzyme, sinon } from '../TestHelpers';
import { Home } from '../../src/client/js/home/Home';
import Banner from '../../src/client/js/home/Banner';
import LoginButton from '../../src/client/js/home/LoginButton';
import FeaturedContent from '../../src/client/js/home/FeaturedContent';
import strings from '../../src/client/js/common/strings';

import bannerImg from '../../src/client/images/homeBanner.jpg';

describe('<Home />', () => {
  let home;
  let onLoginClicked;
  const sandbox = new Sandbox();

  beforeEach(() => {
    sandbox.stub(bannerImg);
    onLoginClicked = sinon.spy();

    home = Enzyme.shallow(<Home onLoginClicked={onLoginClicked} />);
  });

  it('should contain a banner', () => {
    const banner = home.find(Banner);
    expect(banner.props().imgSrc).to.equal(bannerImg);
  });

  it('should contain featured content', () => {
    const featuredContent = home.find(FeaturedContent);

    expect(featuredContent).to.have.length(1);
  });

  it('should contain a mission statement ', () => {
    expect(home.text()).to.contain(strings.home.missionStatement);
  });

  it('should contain a login button ', () => {
    const loginButton = home.find(LoginButton);

    loginButton.props().onClick();

    expect(onLoginClicked.calledOnce).to.equal(true);
  });
});
