import { Router, Route } from 'react-router';

import { React, expect, Enzyme, Sandbox, sinon } from '../TestHelpers';
import AppRouter from '../../src/client/js/navigation/AppRouter';
import AppWithNav from '../../src/client/js/navigation/AppWithNav';
import Home from '../../src/client/js/home/Home';
import Profile from '../../src/client/js/profile/Profile';
import AppRoutes from '../../src/client/js/navigation/appRoutes';

describe('AppRouter.jsx', () => {
  const sandbox = new Sandbox();
  let appRouter;
  let history;

  beforeEach(() => {
    history = { goBack: sinon.spy(), goForward: sinon.spy() };
    appRouter = Enzyme.shallow(<AppRouter history={history} />);
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

    it('should contain a profile route', () => {
      const profileRoute = outerRoute.childAt(1);
      expect(profileRoute.props().path).to.equal(AppRoutes.profile);
      expect(profileRoute.props().component).to.equal(Profile);
    });

    it('should redirect to home for unknown route as the last option', () => {
      const redirectRoute = outerRoute.children().last();

      expect(redirectRoute.props().from).to.equal('*');
      expect(redirectRoute.props().to).to.equal(AppRoutes.home);
    });
  });
});
