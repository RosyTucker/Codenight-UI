import React from 'react';
import Strings from '../common/Strings';
import { connect } from 'react-redux';
import { login } from '../common/actionCreator';
import Banner from './Banner';
import FeaturedContent from './FeaturedContent';
import LoginButton from './LoginButton';

import '../../sass/home/home.scss';
import bannerImg from '../../images/homeBanner.jpg';

const Home = ({ onLoginClicked }) => {
  const { bannerTitle, bannerSubtitle, featuredContent } = Strings.home;
  return (
    <div className="home">
      <Banner imgSrc={bannerImg} title={bannerTitle} subtitle={bannerSubtitle} />
      <FeaturedContent {...featuredContent} />
      <div className="mission-statement">
        <p>{Strings.home.missionStatement}</p>
      </div>
      <div className="login-container">
        <LoginButton onClick={onLoginClicked} />
      </div>
    </div>
  );
};

Home.propTypes = {
  onLoginClicked: React.PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onLoginClicked: () => dispatch(login())
});

export { Home };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
