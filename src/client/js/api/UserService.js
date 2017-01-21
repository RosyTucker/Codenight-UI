import Request from './Request';
import Routes from './Routes';

const getCurrentUser = () => Request.get(Routes.currentUser)
  .then(response => response.body.data);

const logout = () => Request.get(Routes.logout);

export default {
  logout,
  getCurrentUser
};
