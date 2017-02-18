import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../TestHelpers';
import Workshops from '../../src/client/js/workshop/Workshops';
import Workshop from '../../src/client/js/workshop/Workshop';

const defaultDate = 'Sat May 28 2016 18:30:00 GMT+0100 (BST)';
const defaultLocation = 'Some location';
const defaultName = 'Workshop name';

const workshopData = (id, name, location, datetime) => Object.freeze({
  id: id || 1,
  name: name || defaultName,
  location: location || defaultLocation,
  datetime: datetime || defaultDate
});

describe('Workshops.jsx', () => {
  const sandbox = new Sandbox();
  const titleText = 'Some title';
  const customClassName = 'some-class';
  let workshops;
  let workshopArray;

  beforeEach(() => {
    ComponentHelpers.stub(sandbox, Workshop);
    workshopArray = [
      workshopData(1),
      workshopData(3),
      workshopData(2)
    ];
    workshops = Enzyme.shallow(<Workshops
      workshops={workshopArray}
      title={titleText}
      className={customClassName}
    />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be a workshops-container', () => {
    expect(workshops.type()).to.equal('div');
    expect(workshops.hasClass('workshops-container')).to.equal(true);
  });

  it('should have a title', () => {
    const title = workshops.find('.workshops-title');
    expect(title.type()).to.equal('h1');
    expect(title.text()).to.equal(titleText);
  });

  it('should contain a list of workshops', () => {
    const list = workshops.find('ul');
    expect(list.children()).to.have.length(3);

    const workshop1 = list.childAt(0);
    expect(workshop1.type()).to.equal(Workshop);
    expect(workshop1.props()).to.deep.equal(workshopArray[0]);
    expect(workshop1.key()).to.equal('1');

    const workshop3 = list.childAt(1);
    expect(workshop3.type()).to.equal(Workshop);
    expect(workshop3.props()).to.deep.equal(workshopArray[1]);
    expect(workshop3.key()).to.equal('3');

    const workshop2 = list.childAt(2);
    expect(workshop2.type()).to.equal(Workshop);
    expect(workshop2.props()).to.deep.equal(workshopArray[2]);
    expect(workshop2.key()).to.equal('2');
  });

  it('should pass on class name to workshop list', () => {
    const list = workshops.find('ul');
    expect(list.hasClass('workshops')).to.equal(true);
    expect(list.hasClass(customClassName)).to.equal(true);
  });
});
