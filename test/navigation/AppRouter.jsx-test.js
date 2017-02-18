import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../TestHelpers';
import { Router, Route } from 'react-router';
import AppRouter from '../../src/client/js/navigation/AppRouter';
import AppWithNav from '../../src/client/js/navigation/AppWithNav';
import Home from '../../src/client/js/home/Home';
import Profile from '../../src/client/js/profile/Profile';
import ProblemsHome from '../../src/client/js/problems/ProblemsHome';
import LoggedInApp from '../../src/client/js/navigation/LoggedInApp';
import Logout from '../../src/client/js/navigation/Logout';
import AppRoutes from '../../src/client/js/navigation/AppRoutes';

describe('AppRouter.jsx', () => {
  const sandbox = new Sandbox();
  let appRouter;
  let history;

  beforeEach(() => {
    ComponentHelpers.stub(sandbox, Router);
    ComponentHelpers.stub(sandbox, Route);

    history = { someHistoryStuff: {} };
    appRouter = Enzyme.shallow(
      <AppRouter history={history} />
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be a router', () => {
    expect(appRouter.type()).to.equal(Router);
    expect(appRouter.props().history).to.equal(history);
  });

  describe('AppWithNav routing', () => {
    let outerRoute;

    beforeEach(() => {
      outerRoute = appRouter.childAt(0);
    });

    it('should have an wrapping route of AppWithNav', () => {
      expect(outerRoute.type()).to.equal(Route);
      expect(outerRoute.props().component).to.equal(AppWithNav);
    });

    it('should contain a home route', () => {
      const homeRoute = outerRoute.childAt(0);
      expect(homeRoute.props().path).to.equal(AppRoutes.home);
      expect(homeRoute.props().component).to.equal(Home);
    });

    it('should contain a problems route', () => {
      const problemsRoute = outerRoute.childAt(1);
      expect(problemsRoute.props().path).to.equal(AppRoutes.problems);
      expect(problemsRoute.props().component).to.equal(ProblemsHome);
    });

    it('should contain a logged in app route', () => {
      const loggedInApp = outerRoute.childAt(2);
      expect(loggedInApp.props().component).to.equal(LoggedInApp);
    });

    it('should contain a profile within the logged in app', () => {
      const loggedInApp = outerRoute.childAt(2);

      const userHome = loggedInApp.childAt(0);
      expect(userHome.props().path).to.equal(AppRoutes.profile);
      expect(userHome.props().component).to.equal(Profile);
    });

    it('should contain a logout  within the logged in app', () => {
      const loggedInApp = outerRoute.childAt(2);

      const logout = loggedInApp.childAt(2);
      expect(logout.props().path).to.equal(AppRoutes.logout);
      expect(logout.props().component).to.equal(Logout);
    });

    it('should redirect to home for unknown route as the last option', () => {
      const redirectRoute = outerRoute.children().last();

      expect(redirectRoute.props().from).to.equal('*');
      expect(redirectRoute.props().to).to.equal(AppRoutes.home);
    });
  });
});
