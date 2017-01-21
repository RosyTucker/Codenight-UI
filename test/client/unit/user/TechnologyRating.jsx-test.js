import { React, expect, Enzyme } from '../../TestHelpers';
import TechnologyRating from '../../../../src/client/js/profile/TechnologyRating';

describe('TechnologyRating.jsx', () => {
  let technologyRating;
  let props;

  beforeEach(() => {
    props = Object.freeze({ name: 'some technology', level: 4 });
    technologyRating = Enzyme.shallow(<TechnologyRating {...props} />);
  });

  it('should be a technologyRating', () => {
    expect(technologyRating.type()).to.equal('li');
    expect(technologyRating.hasClass('technology-rating')).to.equal(true);
  });

  it('should contain a name and level', () => {
    expect(technologyRating.contains(<span>{props.name}</span>)).to.equal(true);
    expect(technologyRating.contains(<span className="technology-level-4" />)).to.equal(true);
  });

  it('should update level class when with the passed in level', () => {
    technologyRating = Enzyme.shallow(<TechnologyRating name="some name" level={2} />);
    expect(technologyRating.contains(<span className="technology-level-2" />)).to.equal(true);
  });
});
