import React from 'react';
import { connect } from 'react-redux';
import AppRoutes from './AppRoutes';
import Nav from './Nav';
import { getCurrentUser } from '../user/userActions';

class AppWithNav extends React.Component {
  componentDidMount() {
    this.props.checkLoginStatus();
  }
  render() {
    const { location, isLoggedIn } = this.props;
    const isClear = location.pathname === AppRoutes.home;
    return (
      <div>
        <Nav isClear={isClear} isLoggedIn={isLoggedIn} />
        {this.props.children}
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
  checkLoginStatus: () => dispatch(getCurrentUser())
});

export { AppWithNav };
export default connect(mapStateToProps, mapDispatchToProps)(AppWithNav);
