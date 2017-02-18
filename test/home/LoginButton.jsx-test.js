import { React, expect, Enzyme, sinon } from '../TestHelpers';
import LoginButton from '../../client2/js/home/LoginButton';
import Strings from '../../client2/js/common/Strings';

describe('LoginButton.jsx', () => {
  let loginButton;
  let onClick;

  beforeEach(() => {
    onClick = sinon.spy();
    loginButton = Enzyme.shallow(<LoginButton onClick={onClick} />);
  });

  it('should be a button', () => {
    expect(loginButton.type()).to.equal('button');
    expect(loginButton.hasClass('login-button')).to.equal(true);
    expect(loginButton.props().onClick).to.equal(onClick);
    expect(loginButton.text()).to.equal(Strings.signInButton);
  });
});
