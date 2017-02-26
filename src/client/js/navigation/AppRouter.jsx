import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import AppRoutes from './appRoutes';
import AppWithNav from './AppWithNav';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import LoggedInApp from '../navigation/LoggedInApp';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route component={AppWithNav}>
      <Route path={AppRoutes.home} component={Home} />
      <Route component={LoggedInApp}>
        <Route path={AppRoutes.profile} component={Profile} />
      </Route>
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
