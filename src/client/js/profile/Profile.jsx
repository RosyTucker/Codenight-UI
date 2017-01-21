import React from 'react';
import { connect } from 'react-redux';
import TechnologyRatings from './TechnologyRatings';
import Workshops from '../workshop/Workshops';
import Strings from '../common/Strings';
import '../../sass/user/profile.scss';

const userDescView = description => <p className="user-description">{description}</p>;

const userDescEdit = description => <textarea className="user-description">{description}</textarea>;

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  onEdit() {
    this.setState({ isEditing: true });
  }

  onSave() {
    this.setState({ isEditing: false });
  }

  renderEditButton() {
    return (
      <button className="edit-user-information" onClick={this.onEdit.bind(this)}>
        {Strings.profile.editUserInfo}
      </button>
    );
  }

  renderSaveButton() {
    return (
      <button className="save-user-information" onClick={this.onSave.bind(this)}>
        {Strings.profile.saveUserInfo}
      </button>
    );
  }

  render() {
    const { isEditing } = this.state;
    const { user } = this.props;
    return (
      <div className="user-profile">
        <h1 className="profile-heading">{Strings.profile.profileTitle}</h1>
        {isEditing ? this.renderSaveButton() : this.renderEditButton()}
        <div className="user-information">
          <div className="avatar-container">
            <img className="avatar" src={user.avatarUrl} alt={user.name} />
          </div>
          <div className="about-user">
            <h2 className="user-name">{user.name}</h2>
            {isEditing ? userDescEdit(user.description) : userDescView(user.description)}
          </div>
        </div>
        <div className="skill-summary">
          <TechnologyRatings technologies={user.technologies} />
        </div>
        <hr className="rule" />
        <h1 className="workshops-heading">{Strings.workshops.title}</h1>
        <div className="workshop-summary">
          <Workshops
            title={Strings.workshops.attendedTitle}
            className="workshops-attended-summary"
            workshops={[]}
          />
          <Workshops
            title={Strings.workshops.upcomingTitle}
            className="workshops-upcoming-summary"
            workshops={[]}
          />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.currentUser.user
});

export { Profile };

export default connect(mapStateToProps)(Profile);
