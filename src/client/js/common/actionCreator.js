import { ActionTypes } from './Constants';
import AppRoutes from '../navigation/AppRoutes';
import Routes from '../api/Routes';
import { UserService } from '../api';

const receiveCurrentUser = user => ({
  type: ActionTypes.RECEIVE_CURRENT_USER,
  user
});

const receiveLogout = () => {
  window.location.href = AppRoutes.home;
  return { type: ActionTypes.LOGOUT };
};

const receiveUserLoggedOut = () => ({ type: ActionTypes.LOGOUT });

const fetchCurrentUser = () => dispatch => {
  dispatch({ type: ActionTypes.IS_FETCHING_CURRENT_USER });

  return UserService.getCurrentUser()
    .then(user => {
      dispatch(receiveCurrentUser(user));
    }, () => {
      dispatch(receiveUserLoggedOut());
    });
};

const login = () => {
  window.location.href = Routes.login;
  return { type: ActionTypes.LOGGING_IN };
};

const logout = () => dispatch => UserService.logout()
  .then(() => dispatch(receiveLogout()))
  .catch(() => {
    // TODO show error
  });

export {
  login,
  logout,
  fetchCurrentUser
};
