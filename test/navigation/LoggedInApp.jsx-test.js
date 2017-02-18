import { React, expect, Enzyme, sinon } from '../TestHelpers';
import { LoggedInApp } from '../../src/client/js/navigation/LoggedInApp';
import AppRoutes from '../../src/client/js/navigation/AppRoutes';

describe('LoggedInApp.jsx', () => {
  const children = <div className="some-logged-in-thing"></div>;
  let loggedInApp;
  let context;

  beforeEach(() => {
    context = {
      router: {
        replace: sinon.spy()
      }
    };
  });

  it('should be a div with children when logged in', () => {
    loggedInApp = Enzyme.shallow(
      <LoggedInApp isLoggedIn>{children}</LoggedInApp>,
      { context }
    );

    expect(loggedInApp.type()).to.equal('div');
    expect(loggedInApp.hasClass('logged-in-app')).to.equal(true);

    expect(loggedInApp.contains(children)).to.equal(true);
  });

  it('should render a spinner when not logged in', () => {
    loggedInApp = Enzyme.shallow(
      <LoggedInApp isLoggedIn={false}>{children}</LoggedInApp>,
      { context }
    );

    expect(loggedInApp.type()).to.equal('div');
    expect(loggedInApp.hasClass('spinner')).to.equal(true);
    expect(loggedInApp.contains(children)).to.equal(false);
  });

  it('should render a spinner when fetching user and logged in', () => {
    loggedInApp = Enzyme.shallow(
      <LoggedInApp isLoggedIn isFetchingUser>{children}</LoggedInApp>,
      { context }
    );

    expect(loggedInApp.type()).to.equal('div');
    expect(loggedInApp.hasClass('spinner')).to.equal(true);
    expect(loggedInApp.contains(children)).to.equal(false);
  });

  it('should kick user back to home when updated if not logged in or fetching user', () => {
    loggedInApp = Enzyme.shallow(
      <LoggedInApp isLoggedIn>{children}</LoggedInApp>,
      { context }
    );

    expect(context.router.replace.notCalled).to.equal(true);

    loggedInApp.setProps({ isFetchingUser: false, isLoggedIn: false });

    expect(context.router.replace).to.have.been.calledWith(AppRoutes.home);
  });

  it('should not kick user when updated to be logged in', () => {
    loggedInApp = Enzyme.shallow(
      <LoggedInApp>{children}</LoggedInApp>,
      { context }
    );

    loggedInApp.setProps({ isFetchingUser: false, isLoggedIn: true });

    expect(context.router.replace.notCalled).to.equal(true);
  });

  it('should not kick user when updated to be fetchingUser', () => {
    loggedInApp = Enzyme.shallow(
      <LoggedInApp>{children}</LoggedInApp>,
      { context }
    );

    loggedInApp.setProps({ isFetchingUser: true, isLoggedIn: false });

    expect(context.router.replace.notCalled).to.equal(true);
  });
});
