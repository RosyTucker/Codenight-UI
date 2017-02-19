import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import theme from '../common/theme';
import Strings from '../common/Strings';
import { requestLogin } from '../user/userActions';
import Banner from './Banner';
import FeaturedContent from './FeaturedContent';
import LoginButton from './LoginButton';

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

const Home = ({ onLoginClicked }) => {
  const { bannerTitle, featuredContent } = Strings.home;
  return (
    <div>
      <Banner imgSrc={bannerImg} subtitle={bannerTitle}/>
      <div style={style.content}>
        <FeaturedContent {...featuredContent} />
        <div style={style.loginContainer}>
          <p style={style.mission}>{Strings.home.missionStatement}</p>
          <LoginButton onClick={onLoginClicked}/>
        </div>
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
