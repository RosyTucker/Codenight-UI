import React from 'react';
import Strings from '../common/Strings';

import '../../sass/home/banner.scss';

const Banner = ({ imgSrc, title, subtitle }) => (
  <div className="banner-container">
    <img alt={Strings.home.bannerAlt} src={imgSrc} />
    <div className="banner-message">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </div>
);

Banner.propTypes = {
  imgSrc: React.PropTypes.any.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

export default Banner;
