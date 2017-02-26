import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { getIsLoggedIn } from '../user/userReducers';
import appRoutes from './appRoutes';

class LoggedInApp extends Component {
  componentDidMount() {
    const { isLoggedIn, router } = this.props;
    if (!isLoggedIn) {
      router.replace(appRoutes.home);
    }
  }

  componentWillReceiveProps({ isLoggedIn, router }) {
    if (!isLoggedIn) {
      router.replace(appRoutes.home);
    }
  }

  render() {
    const { isLoggedIn, children } = this.props;
    if (!isLoggedIn) {
      return <div />;
    }

    return children;
  }
}

LoggedInApp.propTypes = {
  router: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};


const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});

export { LoggedInApp };
export default connect(mapStateToProps)(LoggedInApp);
