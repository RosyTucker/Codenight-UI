import React from 'react';
import { connect } from 'react-redux';
import AppRoutes from '../navigation/AppRoutes';


const checkAuthStatus = (props, context) => {
  if (props.isFetchingUser || props.isLoggedIn) {
    return;
  }
  context.router.replace(AppRoutes.home);
};

class LoggedInApp extends React.Component {

  static renderLoading() {
    return <div className="spinner">Spinner</div>;
  }

  componentWillReceiveProps(nextProps) {
    checkAuthStatus(nextProps, this.context);
  }

  renderContent() {
    return (<div className="logged-in-app">{this.props.children}</div>);
  }

  render() {
    const showLoading = this.props.isFetchingUser || !this.props.isLoggedIn;
    return showLoading ? LoggedInApp.renderLoading() : this.renderContent();
  }
}

LoggedInApp.propTypes = {
  isFetchingUser: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool,
  history: React.PropTypes.object.isRequired,
  children: React.PropTypes.any
};

LoggedInApp.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { isLoggedIn, isFetchingUser } = state.currentUser;
  return ({
    isFetchingUser,
    isLoggedIn
  });
};

export { LoggedInApp };

export default connect(mapStateToProps)(LoggedInApp);
