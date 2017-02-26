import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import theme from '../common/theme';
import strings from '../common/strings';
import { requestLogin } from '../user/userActions';
import Banner from './Banner';
import FeaturedContent from './FeaturedContent';
import LoginButton from './LoginButton';
import { getIsLoggedIn } from '../user/userReducers';

import bannerImg from '../../../client/images/homeBanner.jpg';

const style = {
  content: {
    ...theme.marginResponsive
  },
  loginContainer: {
    textAlign: 'center'
  },
  mission: {
    color: theme.primaryColor
  }
};

const Home = ({ onLoginClicked, isLoggedIn }) => {
  const { bannerTitle, featuredContent } = strings.home;
  const featuredContentUser = {
    name: featuredContent.name,
    description: featuredContent.description,
    avatarUrl: featuredContent.avatarUrl
  };

  return (
    <div>
      <Banner imgSrc={bannerImg} subtitle={bannerTitle} />
      <div style={style.content}>
        <FeaturedContent user={featuredContentUser} />
        <div style={style.loginContainer}>
          <p style={style.mission}>{strings.home.missionStatement}</p>
          {!isLoggedIn ? <LoginButton onClick={onLoginClicked} /> : null}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
  onLoginClicked: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  onLoginClicked: () => dispatch(requestLogin())
});

export { Home };

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
