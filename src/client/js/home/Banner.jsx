import React from 'react';
import Radium from 'radium';
import theme from '../common/theme';
import Strings from '../common/Strings';

const style = {
  container: {
    position: 'relative',
    textAlign: 'center'
  },
  textContainer: {
    position: 'absolute',
    left: '40%',
    top: '75%',
    transform: 'translate(-30%, -50%)',
    textTransform: 'uppercase',
    color: theme.lightestTextColor,
  },
  image: {
    width: '100%',
    height: 'auto'
  },

  h1: {
    fontWeight: theme.boldFontWeight,
    fontSize: theme.titleFontSize,
    marginBottom: '0.3rem'
  },
  h2: {
    marginTop: '0.3rem',
    fontWeight: theme.lightFontWeight,
    fontSize: theme.largeFontSize
  }
};

const Banner = ({ imgSrc, title, subtitle }) => (
  <div style={style.container}>
    <img style={style.image} alt={Strings.home.bannerAlt} src={imgSrc}/>
    <div style={style.textContainer}>
      <h1 style={style.h1}>{title}</h1>
      <h2 style={style.h2}>{subtitle}</h2>
    </div>
  </div>
);

Banner.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

export { Banner };

const radiumBanner = Radium(Banner);
export default radiumBanner;
