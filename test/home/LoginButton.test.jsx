import { React, expect, Enzyme, sinon } from '../TestHelpers';
import { LoginButton } from '../../src/client/js/home/LoginButton';
import Strings from '../../src/client/js/common/strings';

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
