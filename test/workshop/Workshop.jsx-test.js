import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../TestHelpers';
import { Link } from 'react-router';
import Workshop from '../../src/client/js/workshop/Workshop';
import AppRoutes from '../../src/client/js/navigation/AppRoutes';

describe('Workshop.jsx', () => {
  const sandbox = new Sandbox();
  const id = 344;
  const location = 'some location';
  const name = 'some name';
  const datetime = '2016-05-21T18:30:00';
  let workshop;

  beforeEach(() => {
    ComponentHelpers.stub(sandbox, Link);
    const props = { id, name, location, datetime };
    workshop = Enzyme.shallow(<Workshop {...props} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be a workshop', () => {
    expect(workshop.type()).to.equal('li');
    expect(workshop.hasClass('workshop')).to.equal(true);
  });

  it('should wrap a Link', () => {
    expect(workshop.children()).to.have.length(1);

    const link = workshop.children().first();
    expect(link.props().to).to.equal(AppRoutes.workshops.replace(':id', id));
  });

  it('should contain the date and time', () => {
    const datetimeContainer = workshop.find('.workshop-datetime-container');

    expect(datetimeContainer).to.have.length(1);
    expect(datetimeContainer.type()).to.equal('div');

    const dateContainer = datetimeContainer.children().first();
    expect(dateContainer.text()).to.equal('21st May 16');

    const timeContainer = datetimeContainer.children().last();
    expect(timeContainer.text()).to.equal('18:30 pm');
  });

  it('should contain the name and location', () => {
    const informationContainer = workshop.find('.workshop-information-container');

    expect(informationContainer).to.have.length(1);
    expect(informationContainer.type()).to.equal('div');

    const nameContainer = informationContainer.children().first();
    expect(nameContainer.text()).to.equal(name);

    const locationContainer = informationContainer.children().last();
    expect(locationContainer.text()).to.equal(location);
  });
});
