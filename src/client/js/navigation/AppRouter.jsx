import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import AppRoutes from './appRoutes';
import AppWithNav from './AppWithNav';
import Home from '../home/Home';
import Profile from '../profile/Profile';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route component={AppWithNav}>
      <Route path={AppRoutes.home} component={Home} />
      <Route path={AppRoutes.profile} component={Profile} />
      <Redirect from="*" to={AppRoutes.home} />
    </Route>
  </Router>
);

AppRouter.propTypes = {
  history: React.PropTypes.shape({
    goBack: React.PropTypes.func.isRequired,
    goForward: React.PropTypes.func.isRequired
  }).isRequired
};

export default AppRouter;
