import React, { PropTypes } from 'react';
import Radium from 'radium';
import theme from '../common/theme';
import strings from '../common/strings';

const style = {
  container: {
    position: 'relative',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 'auto',
    '@media only screen and (max-width: 480px)': {
      height: '0'
    }
  },
  message: {
    textTransform: 'uppercase',
    color: theme.darkTextColor,
    margin: '1.5rem 0 0.5rem 0',
    fontWeight: theme.lightFontWeight,
    fontSize: theme.largeFontSize
  }
};

const Banner = ({ imgSrc }) => (
  <div style={style.container}>
    <img style={style.image} alt={strings.home.bannerAltText} src={imgSrc} />
    <h2 style={style.message}>{strings.home.bannerMessage}</h2>
  </div>
);

Banner.propTypes = {
  imgSrc: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({ }).isRequired
  ]).isRequired
};

export default Radium(Banner);
