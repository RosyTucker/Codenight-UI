import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../TestHelpers';
import TechnologyRatings from '../../src/client/js/profile/TechnologyRatings';
import TechnologyRating from '../../src/client/js/profile/TechnologyRating';

describe('TechnologyRatings.jsx', () => {
  const sandbox = new Sandbox();
  let technologyRatings;
  let technologies;

  beforeEach(() => {
    ComponentHelpers.stub(sandbox, TechnologyRating);
    technologies = Object.freeze([
      { name: 'some technology' },
      { name: 'some other technology' }
    ]);
    technologyRatings = Enzyme.shallow(<TechnologyRatings technologies={technologies} />);
  });

  it('should be a technologyRatings list', () => {
    expect(technologyRatings.type()).to.equal('ul');
    expect(technologyRatings.hasClass('technology-ratings')).to.equal(true);
  });

  it('should contain TechnologyRating components', () => {
    expect(technologyRatings.children()).to.have.length(2);

    const firstRating = technologyRatings.childAt(0);
    expect(firstRating.type()).to.equal(TechnologyRating);
    expect(firstRating.key()).to.equal(technologies[0].name);
    expect(firstRating.props()).to.deep.equal(technologies[0]);

    const secondRating = technologyRatings.childAt(1);
    expect(secondRating.type()).to.equal(TechnologyRating);
    expect(secondRating.key()).to.equal(technologies[1].name);
    expect(secondRating.props()).to.deep.equal(technologies[1]);
  });
});
