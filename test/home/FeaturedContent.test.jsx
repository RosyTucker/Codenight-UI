import { React, expect, Enzyme, Sandbox } from '../TestHelpers';
import { FeaturedContent } from '../../src/client/js/home/FeaturedContent';

import featuredAttendeeImg from '../../src/client/images/attendantAvatar.jpg';

describe('FeaturedContent.jsx', () => {
  const sandbox = new Sandbox();
  const name = 'a name';
  const description = 'a description';
  let featuredContent;

  beforeEach(() => {
    sandbox.stub(featuredAttendeeImg);
    featuredContent = Enzyme.shallow(
      <FeaturedContent name={name} description={description} />
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be a container with an attendee', () => {
    expect(featuredContent.type()).to.equal('div');
    expect(featuredContent.hasClass('featured-content')).to.equal(true);

    expect(featuredContent.children()).to.have.length(1);

    const featuredAttendee = featuredContent.find('.featured-attendee');

    expect(featuredAttendee.type()).to.equal('div');
    expect(featuredAttendee.hasClass('featured-attendee')).to.equal(true);
  });

  describe('attendee', () => {
    let featuredAttendee;

    beforeEach(() => {
      featuredAttendee = featuredContent.find('.featured-attendee');
    });

    it('should contain an avatar', () => {
      const avatarContainer = featuredAttendee.find('.avatar-container');

      expect(avatarContainer).to.have.length(1);
      expect(avatarContainer.type()).to.equal('div');

      const image = avatarContainer.find('.avatar');

      expect(image).to.have.length(1);
      expect(image.props().alt).to.equal(name);
      expect(image.props().src).to.equal(featuredAttendeeImg);
    });

    it('should contain a quote', () => {
      const quoteContainer = featuredAttendee.find('.featured-attendee-description');

      expect(quoteContainer).to.have.length(1);
      expect(quoteContainer.type()).to.equal('blockquote');
      expect(quoteContainer.childAt(0).text()).to.equal(description);

      const quotee = quoteContainer.find('cite');
      expect(quotee.text()).to.equal(name);
    });
  });
});
