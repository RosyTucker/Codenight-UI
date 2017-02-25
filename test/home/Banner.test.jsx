import { React, expect, Enzyme } from '../TestHelpers';
import Banner from '../../src/client/js/home/Banner';
import strings from '../../src/client/js/common/strings';

describe('<Banner />', () => {
  let banner;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      imgSrc: { imgSrc: 'some value' }
    }
   ;
    banner = Enzyme.shallow(<Banner {...defaultProps} />);
  });

  it('should contain an img with alt and src', () => {
    const img = banner.find('img');
    expect(img).to.have.length(1);
    expect(img.props().src).to.equal(defaultProps.imgSrc);
    expect(img.props().alt).to.equal(strings.home.bannerAltText);
  });
});
