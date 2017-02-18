import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import Strings from '../common/Strings';
import { requestLogin } from '../user/userActions';
import Banner from './Banner';
import FeaturedContent from './FeaturedContent';
import LoginButton from './LoginButton';

import bannerImg from '../../../client/images/homeBanner.jpg';

const Home = ({ onLoginClicked }) => {
  const { bannerTitle, bannerSubtitle, featuredContent } = Strings.home;
  return (
    <div>
      <Banner imgSrc={bannerImg} title={bannerTitle} subtitle={bannerSubtitle} />
      <FeaturedContent {...featuredContent} />
      <div>
        <p>{Strings.home.missionStatement}</p>
      </div>
      <div>
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
  onLoginClicked: () => dispatch(requestLogin())
});

export { Home };

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
