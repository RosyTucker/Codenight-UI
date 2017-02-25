import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import theme from '../common/theme';
// import strings from '../common/strings';
import {} from '../user/userActions';

const style = {
  container: {
    ...theme.marginResponsive,
    display: 'flex'
  },
  profileImage: {
    ...theme.circleImage
  },
  profileImageWrapper: {
    marginRight: '1rem'
  }
};

const Profile = ({ user }) => (
  <div style={style.container}>
    <div style={style.profileImageWrapper}>
      <img style={style.profileImage} alt={user.name} src={user.avatarUrl} />
    </div>
    <span>{user.name}</span>
    <span>{user.email}</span>
    <span>{user.description}</span>
    <span>{user.blog}</span>
    <span>{user.location}</span>
  </div>
);

Profile.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    avatarUrl: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    blog: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = () => ({});

export { Profile };

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Profile));
