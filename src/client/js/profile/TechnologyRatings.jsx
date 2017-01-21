import React from 'react';
import TechnologyRating from './TechnologyRating';

import '../../sass/user/technologyRatings.scss';

const TechnologyRatings = props => (
  <ul className="technology-ratings">
    {props.technologies.map(
      technology => <TechnologyRating key={technology.name} {...technology} />
    )}
  </ul>
);

TechnologyRatings.propTypes = {
  technologies: React.PropTypes.array.isRequired
};

export default TechnologyRatings;
