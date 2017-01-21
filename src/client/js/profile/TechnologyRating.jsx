import React from 'react';

import '../../sass/user/technologyRatings.scss';

const TechnologyRating = props => (
  <li className="technology-rating">
    <span>{props.name}</span>
    <span className={`technology-level-${props.level}`} />
  </li>
);

TechnologyRating.propTypes = {
  level: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired
};

export default TechnologyRating;
