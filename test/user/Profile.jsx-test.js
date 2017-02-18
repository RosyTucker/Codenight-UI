import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../TestHelpers';
import { Profile } from '../../src/client/js/profile/Profile';
import TechnologyRatings from '../../src/client/js/profile/TechnologyRatings';
import Workshops from '../../src/client/js/workshop/Workshops';
import Strings from '../../src/client/js/common/Strings';

describe('Profile.jsx', () => {
  const sandbox = new Sandbox();
  let profile;
  let user;

  beforeEach(() => {
    ComponentHelpers.stub(sandbox, TechnologyRatings);
    ComponentHelpers.stub(sandbox, Workshops);
    user = Object.freeze({
      name: 'A name',
      avatarUrl: 'an-avatar-url',
      description: 'a description',
      technologies: [{ name: 'some tech' }],
      workshopsAttended: [{ name: 'some attended workshop' }],
      workshopsUpcoming: [{ name: 'some upcoming workshop' }]
    });
    profile = Enzyme.shallow(<Profile user={user} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be a user-profile div', () => {
    expect(profile.type()).to.equal('div');
    expect(profile.hasClass('user-profile')).to.equal(true);
  });

  it('should contain a profile heading as first element', () => {
    const profileHeading = profile.childAt(0);

    expect(profileHeading.type()).to.equal('h1');
    expect(profileHeading.hasClass('profile-heading')).to.equal(true);
    expect(profileHeading.text()).to.equal(Strings.profile.profileTitle);
  });

  it('should contain a user information with an avatar', () => {
    const userInformation = profile.find('.user-information');
    expect(userInformation.type()).to.equal('div');

    const avatarContainer = userInformation.find('.avatar-container');
    expect(avatarContainer.type()).to.equal('div');

    const img = avatarContainer.find('img');
    expect(img.hasClass('avatar')).to.equal(true);
    expect(img.props().src).to.equal(user.avatarUrl);
    expect(img.props().alt).to.equal(user.name);
  });

  it('should contain a user information with a name and description', () => {
    const userInformation = profile.find('.user-information');

    const aboutUser = userInformation.find('.about-user');
    expect(aboutUser.type()).to.equal('div');

    const userName = aboutUser.find('.user-name');
    expect(userName.type()).to.equal('h2');
    expect(userName.text()).to.equal(user.name);

    const userDescription = aboutUser.find('.user-description');
    expect(userDescription.type()).to.equal('p');
    expect(userDescription.text()).to.equal(user.description);
  });


  it('should contain a user skill summary', () => {
    const skillSummary = profile.find('.skill-summary');
    expect(skillSummary.type()).to.equal('div');

    const technologyRatings = skillSummary.find(TechnologyRatings);
    expect(technologyRatings.props().technologies).to.equal(user.technologies);
  });

  describe('edit', () => {
    it('should contain an edit button', () => {
      const editButton = profile.find('.edit-user-information');

      expect(editButton.type()).to.equal('button');
      expect(editButton.text()).to.equal(Strings.profile.editUserInfo);
    });

    it('should switch to edit mode when edit selected', () => {
      const editButton = profile.find('.edit-user-information');

      editButton.simulate('click');

      const userInformation = profile.find('.user-information');

      const userDescription = userInformation.find('.user-description');
      expect(userDescription.type()).to.equal('textarea');
      expect(userDescription.text()).to.equal(user.description);

      const notFoundEditButton = profile.find('.edit-user-information');
      expect(notFoundEditButton).to.have.length(0);

      const saveButton = profile.find('.save-user-information');
      expect(saveButton.type()).to.equal('button');
      expect(saveButton.text()).to.equal(Strings.profile.saveUserInfo);
    });
  });

  it('should contain workshop heading', () => {
    const separator = profile.find('hr');
    expect(separator.hasClass('rule')).to.equal(true);

    const heading = profile.find('.workshops-heading');
    expect(heading.type()).to.equal('h1');
    expect(heading.text()).to.equal(Strings.workshops.title);
  });

  it.skip('should contain a workshop summary', () => {
    const workshopSummary = profile.find('.workshop-summary');
    expect(workshopSummary.type()).to.equal('div');

    const attendedWorkshops = workshopSummary.childAt(0);
    expect(attendedWorkshops.type()).to.equal(Workshops);
    expect(attendedWorkshops.hasClass('workshops-attended-summary')).to.equal(true);
    expect(attendedWorkshops.props().title).to.equal(Strings.workshops.attendedTitle);
    expect(attendedWorkshops.props().workshops).to.equal(user.workshopsAttended);

    const upcomingWorkshops = workshopSummary.childAt(1);
    expect(upcomingWorkshops.type()).to.equal(Workshops);
    expect(upcomingWorkshops.hasClass('workshops-upcoming-summary')).to.equal(true);
    expect(upcomingWorkshops.props().title).to.equal(Strings.workshops.upcomingTitle);
    expect(upcomingWorkshops.props().workshops).to.equal(user.workshopsUpcoming);
  });
});
