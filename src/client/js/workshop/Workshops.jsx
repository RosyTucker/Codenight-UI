import React from 'react';
import Workshop from '../../js/workshop/Workshop';

import '../../sass/workshop/workshops.scss';

const Workshops = props => (
  <div className="workshops-container">
    <h1 className="workshops-title">{props.title}</h1>
    <ul className={`workshops ${props.className}`}>
      {props.workshops.map(workshop => <Workshop key={workshop.id} {...workshop} />)}
    </ul>
  </div>
);

Workshops.propTypes = {
  workshops: React.PropTypes.array.isRequired,
  title: React.PropTypes.string,
  className: React.PropTypes.string
};

export default Workshops;
