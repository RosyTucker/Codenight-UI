import React, { PropTypes } from 'react';
import Radium from 'radium';
import FontAwesome from 'react-fontawesome';

import theme from '../common/theme';

const style = {
  container: {
    borderBottom: `thin solid ${theme.dividerColor}`
  },
  attendee: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '@media only screen and (min-width: 768px)': {
      flexDirection: 'row'
    }
  },
  avatarContainer: {
    textAlign: 'right'
  },
  avatar: {
    ...theme.circleImage
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

const FeaturedContent = ({ user }) => (
  <div style={style.container}>
    <div style={style.attendee}>
      <div style={style.avatarContainer}>
        <img style={style.avatar} alt={user.name} src={user.avatarUrl} />
      </div>
      <blockquote style={style.quote}>
        <FontAwesome style={style.openQuote} name="quote-left" />
        {user.description}
        <FontAwesome style={style.closeQuote} name="quote-right" />
        <cite style={style.cite}>{user.name}</cite>
      </blockquote>
    </div>
  </div>
);


FeaturedContent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
  }).isRequired
};

export default Radium(FeaturedContent);
