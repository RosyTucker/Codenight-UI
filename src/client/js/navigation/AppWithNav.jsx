import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import AppRoutes from './AppRoutes';
import Nav from './Nav';
import { getCurrentUser, requestLogin } from '../user/userActions';

const style = {
  childContainer: {
    paddingTop: '2.8rem'
  }
};

class AppWithNav extends React.Component {
  componentDidMount() {
    this.props.checkLoginStatus();
  }

  render() {
    const { location, isLoggedIn, onLogin } = this.props;
    const isClear = location.pathname === AppRoutes.home;
    return (
      <div>
        <Nav isClear={isClear} isLoggedIn={isLoggedIn} onLogin={onLogin}/>
        <div style={style.childContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppWithNav.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id
});

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(getCurrentUser()),
  onLogin: () => dispatch(requestLogin())
});

export { AppWithNav };
export default connect(mapStateToProps, mapDispatchToProps)(Radium(AppWithNav));
