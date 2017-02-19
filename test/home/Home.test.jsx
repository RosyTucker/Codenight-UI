import { React, expect, Sandbox, Enzyme, sinon } from '../TestHelpers';
import { Home } from '../../src/client/js/home/Home';
import Banner from '../../src/client/js/home/Banner';
import LoginButton from '../../src/client/js/home/LoginButton';
import FeaturedContent from '../../src/client/js/home/FeaturedContent';
import Strings from '../../src/client/js/common/strings';

import bannerImg from '../../src/client/images/homeBanner.jpg';

describe('Home.jsx', () => {
  let home;
  let onLoginClicked;
  const sandbox = new Sandbox();

  beforeEach(() => {
    sandbox.stub(bannerImg);
    onLoginClicked = sinon.spy();

    home = Enzyme.shallow(<Home onLoginClicked={onLoginClicked} />);
  });

  it('should contain a user div', () => {
    expect(home.hasClass('home')).to.equal(true);
  });

  it('should contain a banner', () => {
    const banner = home.find(Banner);

    expect(banner).to.have.length(1);
    expect(banner.props().imgSrc).to.equal(bannerImg);
    expect(banner.props().title).to.equal(Strings.home.bannerTitle);
    expect(banner.props().subtitle).to.equal(Strings.home.bannerSubtitle);
  });

  it('should contain featured content', () => {
    const featuredContent = home.find(FeaturedContent);

    expect(featuredContent).to.have.length(1);

    expect(featuredContent.props().name).to.equal(
      Strings.home.featuredContent.name
    );
    expect(featuredContent.props().description).to.equal(
      Strings.home.featuredContent.description
    );
  });

  it('should contain a mission statement ', () => {
    const missionStatementContainer = home.find('.mission-statement');

    expect(missionStatementContainer).to.have.length(1);

    expect(missionStatementContainer.text()).to.equal(
      Strings.home.missionStatement
    );
  });

  it('should contain a login button ', () => {
    const loginButtonContainer = home.find('.login-container');

    expect(loginButtonContainer).to.have.length(1);

    expect(loginButtonContainer.find(LoginButton)).to.have.length(1);
  });

  it('should call login clicked on login clicked', () => {
    const loginButton = home.find(LoginButton);

    expect(loginButton).to.have.length(1);

    loginButton.simulate('click');

    expect(onLoginClicked.calledOnce).to.equal(true);
  });
});
