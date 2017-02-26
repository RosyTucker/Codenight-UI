import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import FontAwesome from 'react-fontawesome';

import moment from 'moment';
import theme from '../common/theme';
import strings from '../common/strings';

const style = {
  container: {
    ...theme.marginResponsive
  },
  user: {
    '@media only screen and (min-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }
  },
  title: {
    fontSize: theme.titleFontSize,
    color: theme.primaryColor,
    fontWeight: theme.lightFontWeight,
    textAlign: 'center',
    margin: '2rem 0 1rem 0'
  },
  profileImage: {
    ...theme.circleImage(180)
  },
  left: {
    marginRight: '1rem',
    textAlign: 'center'
  },
  right: {
    marginLeft: '1rem'
  },
  fieldValue: {},
  label: {
    marginRight: '0.5rem',
    fontWeight: theme.boldFontWeight
  },
  editButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: theme.primaryColor,
    border: `thin solid ${theme.primaryColorDark}`,
    color: theme.lightestTextColor,
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    textShadow: 0,
    textTransform: 'uppercase',
    ':hover': {
      backgroundColor: theme.primaryColorDark
    }
  },
  rule: {
    margin: '2rem 0'
  }
};

const Profile = ({ user }) => (
  <div style={style.container}>
    <h1 style={style.title}>{strings.profile.pageTitle}</h1>
    <div style={style.user}>
      <button style={style.editButton} alt={strings.profile.editButtonTitle}>
        <FontAwesome name="pencil" />
      </button>
      <div style={style.left}>
        <img style={style.profileImage} alt={user.name} src={user.avatarUrl} />
      </div>
      <div style={style.right}>
        <div>
          <span style={style.label}>{strings.profile.nameLabel}</span>
          <span style={style.fieldValue}>{user.name}</span>
        </div>
        <div>
          <span style={style.label}>{strings.profile.emailLabel}</span>
          <span style={style.fieldValue}>{user.email}</span>
        </div>
        <div>
          <span style={style.label}>{strings.profile.descriptionLabel}</span>
          <span style={style.fieldValue}>{user.description}</span>
        </div>
        <div>
          <span style={style.label}>{strings.profile.blogLabel}</span>
          <span style={style.fieldValue}>{user.blog}</span>
        </div>
        <div>
          <span style={style.label}>{strings.profile.locationLabel}</span>
          <span style={style.fieldValue}>{user.location}</span>
        </div>
        <div>
          <span style={style.label}>{strings.profile.companyLabel}</span>
          <span style={style.fieldValue}>{user.company}</span>
        </div>
        <div>
          <span style={style.label}>{strings.profile.memberSinceLabel}</span>
          <span style={style.fieldValue}>{moment(user.memberSince, 'YYYY-MM-DD').fromNow()}</span>
        </div>
      </div>
    </div>
    <hr style={style.rule} />
  </div>
);

Profile.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    avatarUrl: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    blog: React.PropTypes.string.isRequired,
    company: React.PropTypes.string.isRequired,
    memberSince: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = () => ({});

export { Profile };

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Profile));
