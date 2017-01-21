import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../common/actionCreator';

class Logout extends React.Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <div>Logging out</div>;
  }
}

Logout.propTypes = {
  logout: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export { Logout };

export default connect(() => ({}), mapDispatchToProps)(Logout);
