import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import AppRoutes from './AppRoutes';
import AppWithNav from './AppWithNav';
import LoggedInApp from './LoggedInApp';
import Logout from './Logout';
import Profile from '../profile/Profile';
import Home from '../home/Home';
import ProblemsHome from '../problems/ProblemsHome';
import WorkshopDetail from '../workshop/WorkshopDetail';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route component={AppWithNav}>
      <Route path={AppRoutes.home} component={Home} />
      <Route path={AppRoutes.problems} component={ProblemsHome} />
      <Route component={LoggedInApp}>
        <Route path={AppRoutes.profile} component={Profile} />
        <Route path={AppRoutes.workshops} component={WorkshopDetail} />
        <Route path={AppRoutes.logout} component={Logout} />
      </Route>
      <Redirect from="*" to={AppRoutes.home} />
    </Route>
  </Router>
);

AppRouter.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default AppRouter;
