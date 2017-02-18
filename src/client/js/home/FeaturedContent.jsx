import React from 'react';
import Radium from 'radium';
import FontAwesome from 'react-fontawesome';

import theme from '../common/theme';
import featuredAttendeeImg from '../../../client/images/attendantAvatar.jpg';

const style = {
  container: {
    margin: '0 20px 30px 20px',
    borderBottom: `thin solid ${theme.dividerColor}`
  },
  attendee: {
    ...theme.marginResponsive,
    padding: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarContainer: {
    textAlign: 'right',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: `thin solid ${theme.primaryColor}`
  },
  openQuote: {
    marginRight: '5px'
  },
  closeQuote: {
    marginLeft: '5px'
  },
  quote: {
    fontWeight: theme.lightFontWeight
  },
  cite: {
    marginTop: '0.5rem',
    display: 'block',
    textAlign: 'right'
  }
};

const FeaturedContent = ({ name, description }) => (
  <div style={style.container}>
    <div style={style.attendee}>
      <div style={style.avatarContainer}>
        <img style={style.avatar} alt={name} src={featuredAttendeeImg} />
      </div>
      <blockquote style={style.quote}>
        <FontAwesome style={style.openQuote} name="quote-left" />
        {description}
        <FontAwesome style={style.closeQuote} name="quote-right" />
        <cite style={style.cite}>{name}</cite>
      </blockquote>
    </div>
  </div>
);


FeaturedContent.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export { FeaturedContent };

export default Radium(FeaturedContent);
