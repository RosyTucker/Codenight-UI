import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../common/actionCreator';
import AppRoutes from './AppRoutes';
import Nav from './Nav';

class AppWithNav extends React.Component {
  componentWillMount() {
    this.props.checkLoginStatus();
  }

  render() {
    const isClear = this.props.location.pathname === AppRoutes.home;
    return (
      <div className="app-with-nav">
        <Nav isClear={isClear} isLoggedIn={this.props.isLoggedIn} />
        {this.props.children}
      </div>
    );
  }
}

AppWithNav.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object.isRequired,
  checkLoginStatus: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool
};

export { AppWithNav };

const mapStateToProps = state => ({
  isLoggedIn: state.currentUser.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(fetchCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNav);
