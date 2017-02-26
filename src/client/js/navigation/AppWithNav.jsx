import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import Nav from './Nav';
import strings from '../common/strings';
import { getIsLoading, getIsLoggedIn } from '../user/userReducers';
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
    const { isLoggedIn, onLogin, isLoading } = this.props;

    if (isLoading) {
      return <div>{strings.nav.loading}</div>;
    }

    return (
      <div>
        <Nav isLoggedIn={isLoggedIn} onLogin={onLogin} />
        <div style={style.childContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppWithNav.propTypes = {
  children: React.PropTypes.node.isRequired,
  checkLoginStatus: React.PropTypes.func.isRequired,
  onLogin: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  isLoading: React.PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(getCurrentUser()),
  onLogin: () => dispatch(requestLogin())
});

export { AppWithNav };
export default connect(mapStateToProps, mapDispatchToProps)(Radium(AppWithNav));
