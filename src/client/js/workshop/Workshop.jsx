import React from 'react';
import { Link } from 'react-router';
import AppRoutes from '../navigation/AppRoutes';
import Utils from '../common/Utils';

import '../../sass/workshop/workshops.scss';

const Workshop = props => (
  <li className="workshop">
    <Link to={AppRoutes.workshops.replace(':id', props.id)}>
      <div className="workshop-datetime-container">
        <div>{Utils.formattedDate(props.datetime)}</div>
        <div>{Utils.formattedTime(props.datetime)}</div>
      </div>
      <div className="workshop-information-container">
        <h1>{props.name}</h1>
        <h2>{props.location}</h2>
      </div>
    </Link>
  </li>
);

Workshop.propTypes = {
  location: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  datetime: React.PropTypes.string.isRequired
};

export default Workshop;
