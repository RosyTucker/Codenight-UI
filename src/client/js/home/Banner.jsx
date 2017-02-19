import React from 'react';
import Radium from 'radium';
import theme from '../common/theme';
import Strings from '../common/strings';

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
  subtitle: {
    textTransform: 'uppercase',
    color: theme.darkTextColor,
    margin: '1.5rem 0 0.5rem 0',
    fontWeight: theme.lightFontWeight,
    fontSize: theme.largeFontSize
  }
};

const Banner = ({ imgSrc, subtitle }) => (
  <div style={style.container}>
    <img style={style.image} alt={Strings.home.bannerAlt} src={imgSrc} />
    <h2 style={style.subtitle}>{subtitle}</h2>
  </div>
);

Banner.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

export { Banner };

const radiumBanner = Radium(Banner);
export default radiumBanner;
