import { React, expect, Enzyme } from '../TestHelpers';
import { Banner } from '../../src/client/js/home/Banner';
import Strings from '../../src/client/js/common/strings';

describe('Banner.jsx', () => {
  const title = 'A title';
  const subtitle = 'A subtitle';

  let banner;
  let imgSrc;

  beforeEach(() => {
    imgSrc = { someImgSrc: 'some value' };
    banner = Enzyme.shallow(<Banner imgSrc={imgSrc} title={title} subtitle={subtitle} />);
  });

  it('should be a container', () => {
    expect(banner.type()).to.equal('div');
    expect(banner.hasClass('banner-container'));
  });

  it('should contain an img with alt and src', () => {
    const img = banner.find('img');

    expect(img).to.have.length(1);
    expect(img.props().src).to.equal(imgSrc);
    expect(img.props().alt).to.equal(Strings.home.bannerAlt);
  });

  it('should contain a banner message', () => {
    const bannerMessage = banner.find('.banner-message');
    expect(bannerMessage).to.have.length(1);
    expect(bannerMessage.type()).to.equal('div');

    const heading = bannerMessage.find('h1');
    expect(heading).to.have.length(1);
    expect(heading).to.not.equal(undefined);
    expect(heading.text()).to.equal(title);

    const subHeading = bannerMessage.find('h2');
    expect(subHeading).to.have.length(1);
    expect(subHeading.text()).to.equal(subtitle);
  });
});
