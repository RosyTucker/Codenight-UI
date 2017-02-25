import { React, expect, Enzyme, sinon } from '../TestHelpers';
import LoginButton from '../../src/client/js/home/LoginButton';
import strings from '../../src/client/js/common/strings';

describe('<LoginButton />', () => {
  let loginButton;
  let onClick;

  beforeEach(() => {
    onClick = sinon.spy();
    loginButton = Enzyme.shallow(<LoginButton onClick={onClick} />);
  });

  it('should be a button', () => {
    expect(loginButton.props().onClick).to.equal(onClick);
    expect(loginButton.text()).to.equal(strings.home.signInButton);
  });
});
