import React from 'react';

import '../../sass/home/featuredContent.scss';
import featuredAttendeeImg from '../../images/attendantAvatar.jpg';

const FeaturedContent = ({ name, description }) => (
  <div className="featured-content">
    <div className="featured-attendee">
      <div className="avatar-container">
        <img alt={name} className="avatar" src={featuredAttendeeImg} />
      </div>
      <blockquote className="featured-attendee-description">
        {description}
        <cite>{name}</cite>
      </blockquote>
    </div>
  </div>
);

FeaturedContent.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default FeaturedContent;
