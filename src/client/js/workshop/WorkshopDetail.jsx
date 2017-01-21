import React from 'react';

import '../../sass/workshop/workshopDetail.scss';

const WorkshopDetail = props => (
  <div className="workshop-detail">
    {props.params.id}
  </div>
);

WorkshopDetail.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default WorkshopDetail;
