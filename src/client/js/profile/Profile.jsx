import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

// import theme from '../common/theme';
// import strings from '../common/strings';
import {} from '../user/userActions';

// const style = {
// };

const Profile = ({ user }) => (
  <div>
    {JSON.stringify(user)}
  </div>
);

Profile.propTypes = {
  user: React.PropTypes.shape({ id: React.PropTypes.string.isRequired }).isRequired
};

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = () => ({});

export { Profile };

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Profile));
