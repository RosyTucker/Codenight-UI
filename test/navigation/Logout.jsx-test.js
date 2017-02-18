import { React, expect, Enzyme, sinon } from '../TestHelpers';
import { Logout } from '../../src/client/js/navigation/Logout';

describe('Logout.jsx', () => {
  let logoutComp;
  let logoutProp;

  beforeEach(() => {
    logoutProp = sinon.spy();
    logoutComp = Enzyme.shallow(<Logout logout={logoutProp} />);
  });

  it('should call the logout prop when mounted', () => {
    expect(logoutProp.calledOnce).to.equal(true);
  });

  it('should be a div ', () => {
    expect(logoutComp.type()).to.equal('div');
  });
});
